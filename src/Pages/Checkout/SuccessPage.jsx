import { useNavigate } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const SuccessPage = ({ transactionDetails, user }) => {
    const navigate = useNavigate();

    return (
        <div className=" pt-[150px] pb-[140px] min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8">
            <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-8 text-center">
                <div className="flex justify-center mb-4">
                    <CheckCircleOutlineIcon style={{ fontSize: 64, color: '#22c55e' }} />
                </div>

                <h1 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h1>
                <p className="text-gray-600 mb-6">🎉 Thank you, <span className="font-medium">{user?.first_name} {user?.last_name}</span>! Your payment has been processed.</p>

                <div className="bg-gray-100 rounded-lg p-4 mb-6 text-left text-sm text-gray-700 space-y-2">
                    <p><strong>Amount:</strong> ${transactionDetails?.initialPayment?.amount}</p>
                    <p><strong>Transaction ID:</strong> {transactionDetails?.initialPayment?.id}</p>
                </div>

                <button
                    onClick={() => navigate('/courses')}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg transition duration-200"
                >
                    Explore More Courses
                </button>

                <div className="mt-6 text-sm text-gray-500">
                    <p>An invoice has been sent to your email.</p>
                </div>
            </div>
        </div>
    );
};

export default SuccessPage;
