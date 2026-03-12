import React, { createContext, useContext, useState, useEffect } from "react";
import axiosInstance from "../api/axiosInstance";

const CurrencyContext = createContext();

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
};

export const CurrencyProvider = ({ children }) => {
  const [priceData, setPriceData] = useState(null);
  const [detectedCountry, setDetectedCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  const firstPaymentAmountUSD = Number(import.meta.env.VITE_FIRST_PAYMENT_AMOUNT) || 333;
  const quarterlyPaymentAmountUSD = Number(import.meta.env.VITE_QUARTERLY_PAYMENT_AMOUNT) || 222;

  useEffect(() => {
    detectCountryAndFetchPrices();
  }, []);

  const detectCountryAndFetchPrices = async () => {
    try {
      setLoading(true);
      const geoResponse = await fetch("https://ipapi.co/json/");
      const geoData = await geoResponse.json();
      if (geoData?.country_code) {        
        setDetectedCountry({
          country_code: geoData.country_code,
          country_name: geoData.country_name
        });
        
        await fetchConvertedPrices(geoData.country_code);
      } else {
        setDetectedCountry({
          country_code: "US",
          country_name: "United States"
        });
      }
    } catch (error) {
      console.error("[CurrencyContext] Error detecting country:", error);
      setDetectedCountry({
        country_code: "US",
        country_name: "United States"
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchConvertedPrices = async (countryCode) => {
    try {
      const response = await axiosInstance.get(`/exchange-rates/converted-prices?countryCode=${countryCode}`);      
      if (response.data.rate_source === 'admin') {
      } else if (response.data.rate_source?.startsWith('live')) {
      }
      
      setPriceData(response.data);
    } catch (error) {
      console.error("[CurrencyContext] Error fetching converted prices:", error);
    }
  };

  const getDisplayPrice = (type) => {
    let result;
    
    if (!priceData) {
      if (type === "first") result = `$${firstPaymentAmountUSD}`;
      else if (type === "quarterly") result = `$${quarterlyPaymentAmountUSD}`;
      else if (type === "total") result = `$${firstPaymentAmountUSD + quarterlyPaymentAmountUSD * 3}`;
      else result = "";
      return result;
    }
    
    const { currency_symbol, prices } = priceData;
    if (type === "first") result = `${currency_symbol}${prices.first_payment.converted.toLocaleString()}`;
    else if (type === "quarterly") result = `${currency_symbol}${prices.quarterly_payment.converted.toLocaleString()}`;
    else if (type === "total") result = `${currency_symbol}${prices.total_annual.converted.toLocaleString()}`;
    else result = "";
    
    return result;
  };

  const isLocalCurrency = priceData && priceData.currency_code !== "USD";
  
  const currencySymbol = priceData?.currency_symbol || "$";
  const currencyCode = priceData?.currency_code || "USD";
  const exchangeRate = priceData?.exchange_rate || 1;

  const convertPrice = (usdAmount) => {
    if (!priceData || !usdAmount) return `$${usdAmount}`;
    const converted = Math.round(usdAmount * exchangeRate * 100) / 100;
    return `${currencySymbol}${converted.toLocaleString()}`;
  };

  const convertToLocalCurrency = (usdAmount) => {
    if (!usdAmount) return 0;
    if (!priceData) return usdAmount;
    return Math.round(usdAmount * exchangeRate);
  };

  const formatCurrency = (amount, options = {}) => {
    const { showDecimals = false } = options;
    if (!amount && amount !== 0) return '';
    const symbol = currencySymbol;
    const formatted = showDecimals 
      ? amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
      : Math.round(amount).toLocaleString();
    return `${symbol}${formatted}`;
  };

  const value = {
    priceData,
    detectedCountry,
    loading,
    getDisplayPrice,
    convertPrice,
    convertToLocalCurrency,
    formatCurrency,
    isLocalCurrency,
    currencySymbol,
    currencyCode,
    exchangeRate,
    firstPaymentAmountUSD,
    quarterlyPaymentAmountUSD,
    refreshPrices: detectCountryAndFetchPrices
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyContext;
