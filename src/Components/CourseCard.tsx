import React from "react";
import { Link } from "react-router-dom";
import { getCourseTypeStyles } from "../Pages/Courses2/AllCourses";
import { capitalizeFirst, formatDateShort } from "../utils";
import { convertWeeksToMonths } from "../Pages/Courses2";
import { useCurrency } from "../context/CurrencyContext";

const CourseCard = ({ item, favorites, index, handleFavorite }) => {
    const { convertToLocalCurrency, formatCurrency } = useCurrency();

    const isProgram = item.content_type === "program";
    
    const formatPrice = (amount: number) => {
        if (!amount) return '';
        const converted = convertToLocalCurrency(amount);
        return formatCurrency(converted);
    };

    const renderPrice = () => {
        const pricing = item.pricing;
        if (!pricing) return null;
        if (pricing.quarterly_payment) {
            return (
                <span className="font-semibold text-[#282828]">
                    {formatPrice(pricing.quarterly_payment)}/qtr
                </span>
            );
        }

        return null;
    };
    const style = getCourseTypeStyles(item.content_type === "course" ? item.content_type : item.program_type_slug);
    return (
        <Link
            to={`/course/${item.key}`}
            className="course-widget-main group w-[246px] md:w-[205px] min-w-[205px] lg:min-w-[232px] lg:w-[232px] max-[767px]:mx-auto"
            key={item.id}
        >
            <div className="relative bg-white pl-6 pr-[14px] pt-5 pb-3 lg:p-4 course-box-shadow duration-300 rounded-[18px] rounded-bl-none">
                <div className="flex gap-2 justify-between items-center h-[36px] md:h-[25px] lg:h-[29px]">
                    <img
                        className="h-[36px] md:h-[25px] lg:h-[29px] select-none"
                        src={item?.owners?.certificate_logo_image_url}
                        alt={item.title}
                    />
                    <div className="add-favorite">
                        {favorites && favorites[index] ? (
                            <img
                                className="cursor-pointer select-none w-[17px] lg:w-[22px]"
                                title="Remove from Favorite"
                                src="/images/heart_filled_1.svg"
                                alt="heart icon"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    handleFavorite(index);
                                }}
                            />
                        ) : (
                            <img
                                className="cursor-pointer select-none w-[17px] lg:w-[22px]"
                                title="Add to Favorite"
                                src="/images/heart_empty_1.2.svg"
                                alt="heart icon"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    handleFavorite(index);
                                }}
                            />
                        )}
                    </div>
                </div>

                <div className="institute mt-[5px] md:mt-1 font-medium text-[12px] md:text-[10px] lg:text-[12px] -tracking-[.02em] leading-[18px] md:leading-[15px] lg:leading-[18px] text-[#666666] font-Poppins h-[18px] md:h-[15px] lg:h-[18px] line-clamp-1">
                    {item.owners?.name}
                </div>

                <div
                    className="mt-4 md:mt-[30px] lg:mt-14 mb-2 w-fit px-3 lg:px-4 py-[5px] lg:py-1 rounded-full font-Poppins font-medium text-[8px] lg:text-[12px] leading-[12px] lg:leading-[18px] capitalize "
                    style={{ backgroundColor: style?.bgColor, color: style?.textColor }}
                >
                    {!isProgram
                        ? item.content_type
                        : item.program_type_name}
                </div>

                <h4 className="h-[66px] lg:h-[60px] line-clamp-3 mb-4 lg:mb-5 text-[14px] lg:text-[16px] text-[#282828] -tracking-[.05em] leading-[22px] lg:leading-[20px] font-Poppins font-medium">
                    {item.title}
                </h4>

                <div className="relative">
                    <ul className="text-sm text-textColor duration-300 group-hover:text-black grid gap-2 lg:gap-3 font-medium">
                        <li className="flex items-center gap-3">
                            <div>
                                <img
                                    src={'/images/computer.svg'}
                                    alt="computer"
                                    className="max-h-[12px] lg:max-h-[16px]"
                                />
                            </div>
                            <span className="font-medium text-[11px] lg:text-[12px] font-Montserrat leading-[13px] lg:leading-[16px] -tracking-[.02em] text-[#282828]">
                                Fully Interactive Learning
                            </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <img
                                src={'/images/time.svg'}
                                alt="Course Duration"
                                className="max-h-[12px] lg:max-h-[16px]"
                            />
                            <span className="font-medium text-[11px] lg:text-[12px] font-Montserrat leading-[13px] lg:leading-[16px] -tracking-[.02em] text-[#282828]">
                                {convertWeeksToMonths(item.weeks_to_complete)}
                            </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <img
                                src={!isProgram ? '/images/intro.svg' : '/images/total-courses.svg'}
                                alt="Course Date"
                                className="max-h-[12px] lg:max-h-[16px]"
                            />
                            <span className="font-medium text-[11px] lg:text-[12px] font-Montserrat leading-[13px] lg:leading-[16px] -tracking-[.02em] text-[#282828]">
                                {!isProgram ? capitalizeFirst(item.course_level) : Number(item.total_courses || 0) + " Courses"}
                            </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <img
                                src={'/images/calendar.svg'}
                                alt="Enrollment End"
                                className="max-h-[12px] lg:max-h-[16px]"
                            />
                            <span className="font-medium text-[11px] lg:text-[12px] font-Montserrat leading-[13px] lg:leading-[16px] -tracking-[.02em] text-[#282828]">
                                {item.start_date ? formatDateShort(item.start_date) : '-'}
                            </span>
                        </li>
                        {item.pricing && (
                            <li className="flex items-center gap-3">
                                <img
                                    src={'/images/$currency.svg'}
                                    alt="Price"
                                    className="max-h-[12px] lg:max-h-[16px]"
                                />
                                <span className="font-medium text-[11px] lg:text-[12px] font-Montserrat leading-[13px] lg:leading-[16px] -tracking-[.02em] text-[#282828]">
                                    {renderPrice()}
                                </span>
                            </li>
                        )}
                    </ul>

                    <div className="absolute right-0 bottom-0 z-10">
                        <img src={'/images/edx-black.svg'} alt="edx" />
                    </div>
                </div>
            </div>

            <div className="sponser-bar relative course-box-shadow-2 duration-300 flex gap-2 items-center px-6 py-2 rounded-b-2xl h-10 lg:h-12 bg-white">
                <div className="absolute -top-1 left-0 h-2 w-[100%] custum-radius bg-white">
                    <div className="flex items-center gap-[15px] lg:gap-[10px] h-10 lg:h-12">
                        <p className="font-Poppins font-medium text-[10px] md:text-[8px] lg:text-[10px] leading-[15px] pl-5 lg:pl-[24px] text-[#282828]
                        lg:-tracking-[.05em]">
                            Supported by
                        </p>
                        <img
                            className="w-[57px] lg:w-[63.18px] h-[14.63px]"
                            src={'/images/partner-inexa.png'}
                            alt="partner"
                        />
                    </div>
                </div>
                <div className="absolute -top-0 -right-[33px] lg:-right-10 size-[34px] lg:size-10 border-l border-t border-borderColor2 bg-transparent rounded-tl-3xl corner-shadow"></div>
                <div
                    title="View Course Details"
                    className="corner-icon absolute -right-11 top-[10px] duration-300 bg-blackColor2 size-[30px] lg:size-[32px] flex items-center justify-center rounded-full group-hover:bg-primaryColor"
                >
                    <img
                        className="duration-300 hover:scale-110 w-[10px] lg:w-3"
                        src="/images/list-A.webp"
                        alt="View Details"
                    />
                </div>
            </div>
        </Link>
    );
};
export default CourseCard;
