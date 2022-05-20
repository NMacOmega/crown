import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = () => {
  const publishableKey: string | undefined = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
  if(!publishableKey) throw new Error("publishableKey is undefined");
  return loadStripe(
    publishableKey
  );


}


