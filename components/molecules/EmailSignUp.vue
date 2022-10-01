<template>
  <form>
    <ul class="flex flex-wrap text-white -mx-2">
      <li class="w-full mb-2 px-2">
        <AtomsInput type="email" label="Email" v-model="form.email" />
      </li>
      <li class="w-full mb-2 sm:w-3/5 px-2">
        <AtomsInput label="First Name" v-model="form.fName" />
      </li>
      <li v-if="!short" class="w-full mb-2 sm:w-2/5 px-2">
        <AtomsInput label="Last Name" v-model="form.lName" />
      </li>
      <li class="w-full mb-2 sm:w-2/5 px-2">
        <AtomsInput label="ZIP" v-model="form.zip" />
      </li>
      <li v-if="!short" class="w-full mb-2 sm:w-3/5 px-2">
        <AtomsInput type="tel" label="Phone" v-model="form.phone" />
      </li>
    </ul>
    <div class="mt-2 flex items-center">
      <div class="italic text-xs leading-tight w-auto pr-6">
        By submitting this form, you are agreeing to our
        <NuxtLink to="/privacy/" class="underline decoration-1">
          privacy policy
        </NuxtLink>
        .
      </div>
      <div class="flex-shrink-0 flex justify-end w-auto">
        <AtomsButton>Sign Up</AtomsButton>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    short: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      env: process.env.NODE_ENV,
      submitted: false,
      loading: false,
      form: {
        lName: null,
        phone: null,
        fName: null,
        email: null,
        zip: null,
        error: null,
      },
    };
  },
  methods: {
    submitForm() {
      // console.log('test')
      const _this = this;
      this.form.error = null;
      if (this.form.email && this.form.fName && this.form.zip) {
        this.loading = true;
        axios
          .post(`/.netlify/functions/mailchimp`, JSON.stringify(this.form), {
            headers: {
              "content-type": "application/x-www-form-urlencoded",
            },
          })
          .then(res => {
            if (!res.data.error) {
              this.$gtm.push({ event: "emailSignUp" });
              _this.submitted = false;
              _this.submitted = true;
              return;
            }
            this.form.error = res.data.error;
          })
          .catch(e => {
            console.log(e);
            _this.form.error =
              "Looks like you're already signed up or there is a problem with your email address. Please check your submission and try again.";
            _this.loading = false;
          });
        return;
      }
      this.form.error = "Please complete all fields.";
    },
  },
};
</script>
