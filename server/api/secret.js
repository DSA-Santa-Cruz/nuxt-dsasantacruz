import stripeJs from "stripe";

const stripe = stripeJs(process.env.STRIPE_SECRET);

export default defineEventHandler(async event => {
  try {
    const transaction = await useBody(event);
    // eslint-disable-next-line camelcase
    const { client_secret } = await stripe.paymentIntents.create({
      amount: transaction.amount,
      currency: "usd",
      // Verify your integration in this guide by including this parameter
      metadata: { integration_check: "accept_a_payment" },
    });
    // eslint-disable-next-line camelcase
    return { client_secret };
  } catch (e) {
    return { data: e };
  }
});
