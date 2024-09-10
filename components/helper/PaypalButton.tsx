// @ts-nocheck
import { FUNDING, PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

interface PaypalButtonProps {
    amount: string;
    onSuccess: (details: any) => void

}

const PaypalButton = ({ amount, onSuccess }: PaypalButtonProps) => {
    return (
        <PayPalScriptProvider options={{
            clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
            currency: "USD",
        }}
        >
            <PayPalButtons fundingSource={FUNDING.PAYPAL} createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            amount: {
                                value: amount
                            }
                        }
                    ]
                })
             }}
             onApprove={(data, actions)=>{
                return actions.order.capture().then((details)=>{
                    onSuccess(details)
                })
             }}
            />
        </PayPalScriptProvider>
    )
}

export default PaypalButton
