<template>
  <div
    class="rounded relative flex-grow flex flex-col text-white bg-red"
    :class="{ 'animate-pulse': !loaded }"
  >
    <div class="flex justify-between items-center px-6 pt-6">
      <h2 class="text-xl font-bold">Donate</h2>
      <div v-if="transaction.amount" class="text-white text-lg">
        ${{ transaction.amount.toLocaleString() }}
      </div>
    </div>
    <div class="h-px bg-white mx-6 mt-3 -mb-3" />
    <div
      v-if="success === true"
      class="
        flex flex-grow flex-col
        items-center
        justify-center
        text-center
        pt-6
        pb-12
      "
    >
      <h2 class="text-xl font-bold">Thank you!</h2>
      <p v-if="transaction.amount" class="m-4">
        You generous contribution of ${{ transaction.amount.toLocaleString() }}
        is greatly appreciated.
      </p>
    </div>
    <div
      v-if="!loaded"
      class="
        absolute
        inset-0
        z-10
        bg-red/50
        text-white
        flex flex-col
        items-center
        justify-center
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 animate-spin"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
      loading
    </div>
    <form
      v-if="success !== true"
      class="flex flex-grow w-full overflow-hidden"
      :class="{ 'pointer-events-none opacity-50': !loaded }"
      @submit="handleSubmit"
      @keyup.enter="handleEnter"
    >
      <button type="submit" disabled style="display: none" aria-hidden="true" />
      <div
        class="
          flex flex-shrink-0 flex-grow
          items-stretch
          transition
          duration-200
        "
        style="width: 300%"
        :class="{
          '-translate-x-none': stage === 0,
          '-translate-x-1/3': stage === 1,
          '-translate-x-2/3': stage === 2,
        }"
      >
        <!-- stage 1 : Amount -->
        <div class="w-1/3 flex flex-col flex-shrink-0 p-6">
          <h2 class="mb-3 font-bold">Amount</h2>
          <ul class="grid grid-cols-2 gap-3 my-3">
            <li v-for="amount in amounts" :key="amount">
              <AtomsButton
                type="button"
                class="w-full items-center justify-center text-center"
                @click="
                  () => {
                    stage = 1;
                    transaction.amount = amount;
                    otherAmount = false;
                  }
                "
              >
                ${{ amount.toLocaleString() }}
              </AtomsButton>
            </li>
            <li>
              <AtomsButton
                type="button"
                class="w-full items-center justify-center text-center"
                fluid
                @click="otherAmount = true"
              >
                Other
              </AtomsButton>
            </li>
          </ul>
          <div v-show="otherAmount">
            <AtomsInput
              id="otheramount"
              name="otheramount"
              v-model="transaction.amount"
              type="number"
              label="other amount"
            />
          </div>
          <!--nav -->
          <div class="pt-6 mt-auto flex items-center justify-end">
            <AtomsButton
              type="button"
              @click="stage = 1"
              :class="{ 'opacity-50 pointer-events-none': !transaction.amount }"
            >
              <span>Your Info</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </AtomsButton>
          </div>
        </div>
        <!-- stage 2 : Info -->
        <div class="w-1/3 flex flex-col flex-shrink-0 p-6">
          <h2 class="mb-6 font-bold">Info</h2>
          <!-- name -->
          <div class="grid grid-cols-1 gap-3">
            <div>
              <AtomsInput v-model="transaction.fName" label="First Name" />
            </div>
            <div>
              <AtomsInput v-model="transaction.lName" label="Last Name" />
            </div>
          </div>
          <!-- nav -->
          <div class="pt-6 mt-auto flex items-center justify-between">
            <AtomsButton color="red" type="button" @click="stage = 0">
              Back
            </AtomsButton>
            <AtomsButton
              type="button"
              :class="{
                'opacity-50 pointer-events-none':
                  !transaction.fName || !transaction.lName,
              }"
              @click="stage = 2"
            >
              <span>Payment</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </AtomsButton>
          </div>
        </div>
        <!--stage 3 : Payment-->
        <div class="w-1/3 flex flex-col flex-shrink-0 p-6">
          <h2 class="mb-6 font-bold">Payment</h2>
          <!-- credit card -->
          <span class="text-xs font-bold mb-1">Credit Card</span>
          <div
            class="
              rounded
              text-black
              px-[.67rem]
              py-2
              leading-[1.1]
              h-[2.1rem]
              bg-white
              flex
              items-center
            "
            :class="{ 'border-l-red': isFocused, 'border-l-gray': !isFocused }"
          >
            <div class="w-full" ref="cc" />
          </div>
          <div class="mt-6">
            <AtomsButton
              v-if="transaction.amount"
              type="submit"
              class="w-full"
              :class="{
                'opacity-50 pointer-events-none': !submitReady,
              }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                <path
                  fill-rule="evenodd"
                  d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>
                Pay ${{ transaction.amount.toLocaleString() }} via Credit Card
              </span>
            </AtomsButton>
          </div>
          <div class="pt-6 mt-auto flex items-center justify-between">
            <AtomsButton color="red" type="button" @click="stage = 1">
              Back
            </AtomsButton>
          </div>
        </div>
      </div>
    </form>
    <div>
      <div>
        <div
          class="flex flex-shrink-0 transition duration-200"
          :class="{
            'w-1/3': stage === 0,
            'w-2/3': stage === 1,
            'w-3/3': stage === 2,
          }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { loadStripe } from "@stripe/stripe-js";

export default {
  data: () => ({
    stripe: null,
    stage: 0,
    loaded: false,
    amounts: [5, 10, 50, 100, 250],
    otherAmount: false,
    transaction: { amount: null, fName: null, lName: null },
    cardElement: null,
    isFocused: false,
    error: null,
    submitReady: false,
    success: false,
  }),
  mounted() {
    // eslint-disable-next-line func-names
    this.loadForm();
  },
  watch: {
    stripe(value) {
      if (value) {
        const stripe = value;
        this.loaded = true;
        const elements = stripe.elements({
          // fonts: [
          //   {
          //     cssSrc:
          //       "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap",
          //   },
          // ],
        });
        this.cardElement = elements.create("card");
        this.cardElement.mount(this.$refs.cc);
        this.cardElement.on("focus", () => {
          this.isFocused = true;
        });
        this.cardElement.on("blur", () => {
          this.isFocused = false;
        });
        this.cardElement.on("change", this.handleCardChange);
      }
    },
  },
  methods: {
    async loadForm() {
      const config = useRuntimeConfig();
      const stripe = await loadStripe(config.public.STRIPE_KEY);
      this.stripe = stripe;
    },
    handleCardChange(event) {
      if (event.complete) {
        this.submitReady = true;
      } else {
        this.submitReady = false;
      }
    },
    handleEnter(e) {
      e.preventDefault();
      if (this.stage === 0 && this.transaction.amount) {
        this.stage = 1;
        return;
      }
      if (
        this.stage === 1 &&
        this.transaction.fName &&
        this.transaction.lName
      ) {
        this.stage = 2;
        return;
      }
      if (this.submitReady) {
        this.handleSubmit();
      }
    },
    handleSuccess(e) {
      // console.log(e);
      this.loaded = true;
      this.success = true;
    },
    handleSubmit(e) {
      const { stripe, cardElement, transaction, handleSuccess } = this;
      this.loaded = false;
      if (e) {
        e.preventDefault();
      }
      // get secret
      try {
        fetch("/api/secret", {
          method: "POST",
          body: JSON.stringify({
            ...this.transaction,
            amount: this.transaction.amount * 100,
          }),
        })
          .then(res => res.json())
          // eslint-disable-next-line func-names
          .then(res => {
            // console.log(res);
            const { client_secret: secret } = res;
            // console.log(this.cardElement);
            // create payment
            stripe
              .confirmCardPayment(secret, {
                payment_method: {
                  card: cardElement,
                  billing_details: {
                    name: transaction.fName + transaction.lName,
                  },
                },
              })
              .then(res => res.json())
              // eslint-disable-next-line func-names
              .then(result => {
                if (result?.error) {
                  handleError(result);
                  return;
                }
                handleSuccess(result);
              });
          });
      } catch (err) {
        console.log(err);
        this.error = err;
      }
    },
  },
};
</script>
