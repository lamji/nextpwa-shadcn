'use client';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';

// Define the shape of our form to avoid using `any`
interface FormValues {
  bankName: string;
  totalLoanAmount: number | '';
  loanStartDate: string | ''; // using string since input type="date" returns string
  monthsToPay: number | '';
  monthlyAmortization: number | '';
  dueDate: string | ''; // using string since input type="date" returns string
  firstPayment: number | '';
  bankReference: string;
}

// Minimal shape used inside Yup test to avoid Date vs string mismatches
type TestValues = {
  firstPayment?: number | string;
  monthsToPay?: number | string;
};

const validationSchema = Yup.object({
  bankName: Yup.string().trim().required('Bank name is required'),
  totalLoanAmount: Yup.number()
    .typeError('Total loan amount must be a number')
    .positive('Must be greater than 0')
    .required('Total loan amount is required'),
  loanStartDate: Yup.date().typeError('Invalid date').required('Loan start date is required'),
  monthsToPay: Yup.number()
    .typeError('Months to pay must be a number')
    .integer('Must be a whole number')
    .min(1, 'Must be at least 1 month')
    .required('Months to pay is required'),
  monthlyAmortization: Yup.number()
    .typeError('Monthly amortization must be a number')
    .positive('Must be greater than 0')
    .required('Monthly amortization is required'),
  dueDate: Yup.date().typeError('Invalid date').required('Due date is required'),
  firstPayment: Yup.number()
    .typeError('First payment must be a number (month index)')
    .integer('Must be a whole number')
    .min(1, 'Must be at least 1')
    .required('First payment is required'),
  bankReference: Yup.string().trim().required('Bank reference is required'),
}).test(
  'firstPayment-vs-monthsToPay',
  'First payment cannot be greater than Months to pay',
  values => {
    const { firstPayment, monthsToPay } = values as TestValues;
    if (!firstPayment || !monthsToPay) return true;
    return Number(firstPayment) <= Number(monthsToPay);
  },
);

const initialValues: FormValues = {
  bankName: '',
  totalLoanAmount: '',
  loanStartDate: '',
  monthsToPay: '',
  monthlyAmortization: '',
  dueDate: '',
  firstPayment: '',
  bankReference: '',
};

export default function AddLoanPage() {
  const router = useRouter();

  return (
    <div className="bg-white text-gray-900">
      <div className="container mx-auto max-w-3xl p-4 md:p-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Add Loan</h1>
          <button
            type="button"
            className="rounded-md border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50"
            onClick={() => router.back()}
          >
            Cancel
          </button>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm md:p-6">
          <Formik<FormValues>
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              // TODO: Replace with actual create action/API call
              console.log('Create Loan:', values);
              setTimeout(() => {
                setSubmitting(false);
                router.push('/loans');
              }, 500);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label className="mb-1 block text-sm font-medium" htmlFor="bankName">
                    Bank Name
                  </label>
                  <Field
                    id="bankName"
                    name="bankName"
                    type="text"
                    placeholder="e.g., Chase Bank"
                    className="focus:border-primary w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none"
                  />
                  <ErrorMessage
                    name="bankName"
                    component="div"
                    className="mt-1 text-xs text-red-600"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium" htmlFor="totalLoanAmount">
                    Total Loan Amount
                  </label>
                  <Field
                    id="totalLoanAmount"
                    name="totalLoanAmount"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="e.g., 10000"
                    className="focus:border-primary w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none"
                  />
                  <ErrorMessage
                    name="totalLoanAmount"
                    component="div"
                    className="mt-1 text-xs text-red-600"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium" htmlFor="loanStartDate">
                    Loan Start Date
                  </label>
                  <Field
                    id="loanStartDate"
                    name="loanStartDate"
                    type="date"
                    placeholder="YYYY-MM-DD"
                    className="focus:border-primary w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none"
                  />
                  <ErrorMessage
                    name="loanStartDate"
                    component="div"
                    className="mt-1 text-xs text-red-600"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium" htmlFor="monthsToPay">
                    Loan Term (months)
                  </label>
                  <Field
                    id="monthsToPay"
                    name="monthsToPay"
                    type="number"
                    min="1"
                    step="1"
                    placeholder="e.g., 12"
                    className="focus:border-primary w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none"
                  />
                  <ErrorMessage
                    name="monthsToPay"
                    component="div"
                    className="mt-1 text-xs text-red-600"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium" htmlFor="monthlyAmortization">
                    Monthly Amortization
                  </label>
                  <Field
                    id="monthlyAmortization"
                    name="monthlyAmortization"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="e.g., 1000"
                    className="focus:border-primary w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none"
                  />
                  <ErrorMessage
                    name="monthlyAmortization"
                    component="div"
                    className="mt-1 text-xs text-red-600"
                  />
                </div>

                <div>
                  <label className="text_sm mb-1 block font-medium" htmlFor="dueDate">
                    Due Date
                  </label>
                  <Field
                    id="dueDate"
                    name="dueDate"
                    type="date"
                    className="focus:border-primary w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none"
                  />
                  <ErrorMessage
                    name="dueDate"
                    component="div"
                    className="mt-1 text-xs text-red-600"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium" htmlFor="firstPayment">
                    First Payment (month number)
                  </label>
                  <Field
                    id="firstPayment"
                    name="firstPayment"
                    type="number"
                    min="1"
                    step="1"
                    placeholder="e.g., 1"
                    className="focus:border-primary w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none"
                  />
                  <ErrorMessage
                    name="firstPayment"
                    component="div"
                    className="mt-1 text-xs text-red-600"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-1 block text-sm font-medium" htmlFor="bankReference">
                    Bank Reference
                  </label>
                  <Field
                    id="bankReference"
                    name="bankReference"
                    type="text"
                    placeholder="e.g., LOAN123"
                    className="focus:border-primary w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none"
                  />
                  <ErrorMessage
                    name="bankReference"
                    component="div"
                    className="mt-1 text-xs text-red-600"
                  />
                </div>

                <div className="mt-2 flex items-center justify-end gap-2 md:col-span-2">
                  <button
                    type="button"
                    className="rounded-md border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50"
                    onClick={() => router.push('/')}
                  >
                    Back to Loans
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary rounded-md px-4 py-2 text-sm text-white hover:opacity-90 disabled:opacity-60"
                  >
                    {isSubmitting ? 'Saving...' : 'Save Loan'}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
