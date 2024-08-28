/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Update this if your source files are in different locations
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["Outfit"],
        body: ["Raleway"],
        sub: ["Avenir"],
      },
      colors: {
        primary: {
          100: "#347856",
          200: "#252B42",
          300: "#161C2D",
        },
        secondary: {
          100: "#E6622C",
          200: "#64AB80",
          300: "#EEF4F0",
        },

        white: {
          100: "#fff",
          200: "#F8FCF9",
          300: "#F1F7F5",
        },
      },
      backgroundImage: {
        "hero-background": "url('/src/assests/Image/hero.png')",
        "hero-mobile-background": "url('/src/assests/Image/heromobile.png')",
        "header-background-one": "url('/src/assests/Image/header-img-1.png')",
        "header-background-two": "url('/src/assests/Image/contact-header.png')",
      },
      keyframes: {
        moveInLeft: {
          "0%": { transform: "translateX(-100px)", opacity: 0 },
          "80%": { transform: "translateX(10px)" },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        // moveInRight: {
        //   "0%": { transform: "translateX(100px)", opacity: 0 },
        //   "80%": { transform: "translateX(-10px)" },
        //   "100%": { transform: "translateX(0)", opacity: 1 },
        // },
        moveInBottom: {
          "0%": { transform: "translateY(3rem)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        ping: {
          "75%, 100%": { transform: "scale(1.1)", opacity: 1 },
        },
      },
      animation: {
        moveInLeft: "moveInLeft 1s ease-out",
        // moveInRight: "moveInRight 1s ease-out",
        moveInBottom: "moveInBottom 1.5s ease-in backwards",
        // animatePing: "ping 3s cubic-bezier(0, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

// <template>
//   <div class="">
//     <div class="relative bg-[#F2F7F8]">
//       <!-- Parent background -->
//       <div
//         class="absolute inset-0 bg-[#F2F7F8]"
//         style="height: calc(50% + 1rem)"
//       >
//         <!-- Top half with dynamic height -->
//         <div class="h-full" style="height: calc(50% - 0.5rem)">
//           <!-- Empty div to adjust parent height dynamically -->
//         </div>
//       </div>
//       <div
//         class="absolute bottom-0 inset-x-0 bg-[#ffff]"
//         style="top: 50%; height: calc(50% + 1rem)"
//       >
//         <!-- Bottom half with dynamic height -->
//         <div class="h-full" style="height: calc(50% - 0.5rem)">
//           <!-- Empty div to adjust parent height dynamically -->
//         </div>
//       </div>

//       <!-- Child element with overlapping blue background -->
//       <div
//         class="relative z-2 flex items-center justify-center h-full mx-6 md:mx-0"
//       >
//         <div
//           class="bg-white px-4 py-8 md:py-8 md:px-24 rounded-lg shadow-md text-center md:w-[75%]"
//         >
//           <!-- Content in the middle of the child element -->
//           <div class="mb-8 flex justify-center items-center">
//             <div
//               class="text-j2g-core md:leading-[65px] leading-10 text-center md:text-left md:text-[2rem] text-3xl font-medium"
//             >
//               Quick
//               <span class="j2g-underline">Quotes</span>
//             </div>
//           </div>
//           <div class="mx-auto mt-8">
//             <!-- Tabs -->
//             <div class="flex mb-4 rounded-md overflow-hidden">
//               <div
//                 v-for="tab in tabs"
//                 :key="tab.id"
//                 @click="activateTab(tab.id)"
//                 :class="{ active: activeTab === tab.id }"
//                 class="cursor-pointer tab-btn flex-1 p-2 md:p-2.5 text-center bg-[#F2F7F8] text-[#0D4699] hover:bg-blue-50 focus:outline-none text-xs md:text-sm"
//               >
//                 {{ tab.title }}
//               </div>
//             </div>

//             <!-- Tab Content -->
//             <div
//               v-for="tab in tabs"
//               :key="tab.id"
//               :class="{ hidden: activeTab !== tab.id }"
//               class="tab-content"
//             >
//               <form v-if="activeTab === tab.id" class="py-4">
//                 <div v-if="tab.id === 1">
//                   <div
//                     class="mb-4 grid grid-cols-6 md:grid-cols-6 gap-6 md:gap-8"
//                   >
//                     <div
//                       class="col-span-6 md:col-span-2 border border-gray-200 rounded-md pr-4 flex justify-between items-center"
//                     >
//                       <div>
//                         <select
//                           v-model="selectedCountryId"
//                           @change="handleCountryChange"
//                           id="fromSelect"
//                           class="h-full block w-full px-4 py-3 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-[#0D4699] focus:border-[#0D4699] text-xs sm:text-sm"
//                         >
//                           <option value="" disabled selected>Origin</option>

//                           <option
//                             v-for="item in countries"
//                             :data-countryName="item.country"
//                             :value="item.id"
//                           >
//                             {{ item.warehouse_name }} -
//                             {{ item.estimated_delivery_days }}
//                           </option>
//                         </select>
//                       </div>

//                       <div>
//                         <img
//                           src="@/assets/Svg/dropdown.svg"
//                           class="h-5 w-5"
//                           alt=""
//                         />
//                       </div>
//                     </div>
//                     <div
//                       class="col-span-6 md:col-span-2 border border-gray-200 rounded-md flex justify-between items-center pr-4"
//                     >
//                       <select
//                         v-model="tab.to"
//                         id="toSelect"
//                         class="h-full block w-full px-4 py-3 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-[#0D4699] focus:border-[#0D4699] text-xs sm:text-sm"
//                       >
//                         <option value="Lagos">Destination - Lagos</option>
//                       </select>

//                       <div>
//                         <img
//                           src="@/assets/Svg/dropdown.svg"
//                           class="h-5 w-5"
//                           alt=""
//                         />
//                       </div>
//                     </div>

//                     <div class="col-span-6 md:col-span-2">
//                       <input
//                         type="number"
//                         id="input3"
//                         v-model="weight"
//                         class="h-full mt-1 block w-full px-4 py-3 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-[#0D4699] focus:border-[#0D4699] text-xs sm:text-sm"
//                         placeholder="Weight (kg)"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div v-else-if="tab.id === 2">
//                   <div class="mb-4 grid grid-cols-6 gap-6 md:gap-8">
//                     <div
//                       class="col-span-6 md:col-span-2 border border-gray-200 rounded-md flex justify-between items-center pr-4"
//                     >
//                       <select
//                         name="from"
//                         id="option_1"
//                         class="h-full block w-full px-4 py-3 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-[#0D4699] focus:border-[#0D4699] text-xs sm:text-sm"
//                       >
//                         <option disabled value="">Service</option>
//                         <option>Expedited Export</option>
//                       </select>

//                       <div>
//                         <img
//                           src="@/assets/Svg/dropdown.svg"
//                           class="h-5 w-5"
//                           alt=""
//                         />
//                       </div>
//                     </div>

//                     <div
//                       class="col-span-6 md:col-span-2 border border-gray-200 rounded-md flex justify-between items-center pr-4"
//                     >
//                       <select
//                         name="from"
//                         id="input3"
//                         class="h-full block w-full px-4 py-3 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-[#0D4699] focus:border-[#0D4699] text-xs sm:text-sm"
//                       >
//                         <option>Origin - Lagos</option>
//                       </select>
//                       <!-- <input
//                         type="text"
//                         id="input3"
//                         value="Lagos"
//                         readonly
//                         class="h-full mt-1 block w-full px-4 py-3 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-[#0D4699] focus:border-[#0D4699] text-xs sm:text-sm"
//                         placeholder="From"
//                       /> -->

//                       <div>
//                         <img
//                           src="@/assets/Svg/dropdown.svg"
//                           class="h-5 w-5"
//                           alt=""
//                         />
//                       </div>
//                     </div>

//                     <div
//                       class="col-span-6 md:col-span-2 border border-gray-200 rounded-md flex justify-between items-center pr-4"
//                     >
//                       <select
//                         id="expressSelect"
//                         @change="setReceiverCountry($event)"
//                         class="h-full block w-full px-4 py-3 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-[#0D4699] focus:border-[#0D4699] text-xs sm:text-sm"
//                       >
//                         <option>Destination Country</option>
//                         <option
//                           v-for="(item, idx) in countryList"
//                           :key="idx"
//                           :value="item.id"
//                         >
//                           {{ item.name }}
//                         </option>
//                         <!-- <option value="" disabled selected>
//                           Receiver's Country
//                         </option>
//                         <option
//                           v-for="(item, idx) in countries_list"
//                           :key="idx"
//                           :value="JSON.stringify(item)"
//                         >
//                           {{ item.flag }} {{ item.name }}
//                         </option> -->
//                       </select>

//                       <div>
//                         <img
//                           src="@/assets/Svg/dropdown.svg"
//                           class="h-5 w-5"
//                           alt=""
//                         />
//                       </div>
//                     </div>
//                     <!-- <div
//                       class="col-span-6 md:col-span-3 border border-gray-200 rounded-md"
//                     >
//                       <select
//                         id="expressSelect"
//                         @change="setReceiverState($event)"
//                         class="h-full block w-full px-4 py-3 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-[#0D4699] focus:border-[#0D4699] text-xs sm:text-sm"
//                       >
//                         <option value="" disabled selected>
//                           Receiver's State
//                         </option>
//                         <option
//                           v-for="(item, idx) in states_list"
//                           :key="idx"
//                           :value="JSON.stringify(item)"
//                         >
//                           {{ item.name }}
//                         </option>
//                       </select>

//                       <div
//                         class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
//                       >
//                         <svg
//                           class="fill-current h-4 w-4"
//                           xmlns="http://www.w3.org/2000/svg"
//                           viewBox="0 0 20 20"
//                         >
//                           <path
//                             d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
//                           />
//                         </svg>
//                       </div>
//                     </div> -->

//                     <div class="col-span-6 md:col-span-3">
//                       <input
//                         type="text"
//                         id="input2"
//                         v-model="weight"
//                         class="h-full mt-1 block w-full px-4 py-3 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-[#0D4699] focus:border-[#0D4699] text-xs sm:text-sm"
//                         placeholder="Weight (kg)"
//                       />
//                     </div>

//                     <div class="col-span-6 md:col-span-3">
//                       <input
//                         type="number"
//                         id="input4"
//                         v-model="itemValue"
//                         class="h-full mt-1 block w-full px-4 py-3 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-[#0D4699] focus:border-[#0D4699] text-xs sm:text-sm"
//                         placeholder="Item's worth (NGN)"
//                       />
//                     </div>
//                   </div>

//                   <!-- <div class="mb-4">
//                     <h2>For Expedited Quick Quote</h2>
//                     <nuxt-link
//                       to="/services/export-expedited/quote"
//                       class="text-blue-500"
//                       >Click Here</nuxt-link
//                     >
//                   </div> -->
//                 </div>

//                 <div v-else-if="tab.id === 3">
//                   <div class="mb-4 grid grid-cols-6 md:grid-cols-6 gap-8">
//                     <div
//                       class="col-span-6 md:col-span-2 border border-gray-200 rounded-md flex justify-between items-center pr-4"
//                     >
//                       <select
//                         name="nationwide_from"
//                         id=""
//                         class="h-full block w-full px-4 py-3 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-[#0D4699] focus:border-[#0D4699] text-xs sm:text-sm"
//                       >
//                         <option value="lagos">Origin - Lagos</option>
//                       </select>
//                       <div>
//                         <img
//                           src="@/assets/Svg/dropdown.svg"
//                           class="h-5 w-5"
//                           alt=""
//                         />
//                       </div>
//                     </div>
//                     <div
//                       class="col-span-6 md:col-span-2 border border-gray-200 rounded-md flex justify-between items-center pr-4"
//                     >
//                       <select
//                         id="expressSelect"
//                         @change="setReceiverState($event)"
//                         class="h-full block w-full px-4 py-3 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-[#0D4699] focus:border-[#0D4699] text-xs sm:text-sm"
//                       >
//                         <option value="" disabled selected>
//                           Receiver's State
//                         </option>
//                         <option
//                           v-for="(item, idx) in statesData"
//                           :key="idx"
//                           :value="JSON.stringify(item)"
//                         >
//                           {{ item.name }}
//                         </option>
//                       </select>

//                       <div>
//                         <img
//                           src="@/assets/Svg/dropdown.svg"
//                           class="h-5 w-5"
//                           alt=""
//                         />
//                       </div>
//                     </div>

//                     <div class="col-span-6 md:col-span-2">
//                       <input
//                         type="number"
//                         id="input3"
//                         v-model="weight"
//                         class="h-full mt-1 block w-full px-4 py-3 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-[#0D4699] focus:border-[#0D4699] text-xs sm:text-sm"
//                         placeholder="Weight (kg)"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div v-else-if="tab.id === 4">
//                   <div class="mb-4 grid grid-cols-8 gap-8">
//                     <div
//                       class="col-span-8 md:col-span-2 border border-gray-200 rounded-md flex justify-between items-center pr-4"
//                     >
//                       <select
//                         name="movers_from"
//                         id=""
//                         class="h-full block w-full px-4 py-3 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-[#0D4699] focus:border-[#0D4699] text-xs sm:text-sm"
//                       >
//                         <option value="from">Origin</option>
//                       </select>

//                       <div>
//                         <img
//                           src="@/assets/Svg/dropdown.svg"
//                           class="h-5 w-5"
//                           alt=""
//                         />
//                       </div>
//                     </div>
//                     <div
//                       class="col-span-8 md:col-span-2 border border-gray-200 rounded-md flex justify-between items-center pr-4"
//                     >
//                       <select
//                         name="movers_to"
//                         id=""
//                         class="h-full block w-full px-4 py-3 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-[#0D4699] focus:border-[#0D4699] text-xs sm:text-sm"
//                       >
//                         <option value="from">Destination</option>
//                       </select>

//                       <div>
//                         <img
//                           src="@/assets/Svg/dropdown.svg"
//                           class="h-5 w-5"
//                           alt=""
//                         />
//                       </div>
//                     </div>

//                     <div
//                       class="col-span-8 md:col-span-2 border border-gray-200 rounded-md flex justify-between items-center pr-4"
//                     >
//                       <select
//                         name="movers_trip"
//                         id=""
//                         class="h-full block w-full px-4 py-3 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-[#0D4699] focus:border-[#0D4699] text-xs sm:text-sm"
//                       >
//                         <option value="from">Full day</option>
//                         <option value="from">Single trip</option>
//                       </select>

//                       <div>
//                         <img
//                           src="@/assets/Svg/dropdown.svg"
//                           class="h-5 w-5"
//                           alt=""
//                         />
//                       </div>
//                     </div>

//                     <div
//                       class="col-span-8 md:col-span-2 border border-gray-200 rounded-md flex justify-between items-center pr-4"
//                     >
//                       <select
//                         name="movers_truck"
//                         id=""
//                         class="h-full block w-full px-4 py-3 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-[#0D4699] focus:border-[#0D4699] text-xs sm:text-sm"
//                       >
//                         <option value="from">5 tonne Truck</option>
//                         <option value="from">20 tonne Truck</option>
//                       </select>

//                       <div>
//                         <img
//                           src="@/assets/Svg/dropdown.svg"
//                           class="h-5 w-5"
//                           alt=""
//                         />
//                       </div>
//                     </div>

//                     <!-- <div class="col-span-8 md:col-span-2">
//                       <input
//                         type="text"
//                         id="input3"
//                         v-model="tab.floor1"
//                         class="h-full mt-1 block w-full px-4 py-3 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-[#0D4699] focus:border-[#0D4699] text-xs sm:text-sm"
//                         placeholder="Full day or Single trip"
//                       />
//                     </div>

//                     <div class="col-span-8 md:col-span-2">
//                       <input
//                         type="text"
//                         id="input4"
//                         v-model="tab.floor2"
//                         class="h-full mt-1 block w-full px-4 py-3 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-[#0D4699] focus:border-[#0D4699] text-xs sm:text-sm"
//                         placeholder="Truck size"
//                       />
//                     </div> -->
//                   </div>
//                 </div>

//                 <div class="mt-8 grid grid-cols-4 gap-6 md:gap-0">
//                   <div
//                     class="flex justify-center md:justify-start items-center text-sm font-light md:col-span-2 col-span-4 order-2 md:order-1"
//                   >
//                     <p>Do you have a shipment?</p>
//                     <button
//                       @click.prevent="trackShipment"
//                       class="px-2 text-[#0D4699]"
//                     >
//                       Track shipment
//                     </button>
//                   </div>
//                   <button
//                     type="submit"
//                     @click.prevent="getQuote(tab.id)"
//                     class="col-span-4 md:col-span-1 md:col-start-4 order-1 md:order-2 inline-flex items-center justify-center py-4 rounded-md shadow-sm text-sm font-normal text-white bg-[#0D4699] focus:outline-none"
//                   >
//                     {{ loading ? "Requesting..." : "Request quote" }}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//     <ComposableQuoteResult
//       :selectedCountry="selectedCountry || receiverCountry"
//       :weight="weight"
//       :getTotalCost="totalCost"
//       :importOverlay="importOverlay"
//       :actionHandler="actionHandler"
//       :digitFormatter="digitFormatter"
//       :state="receiverState"
//       :origin="origin"
//       :destination="destination"
//       :type="type"
//       :from="'Lagos'"
//       :to="''"
//     />

//     <!-- <ComposableQuoteResult
//       :selectedCountry="selectedCountry || receiverCountry"
//       :weight="weight"
//       :getTotalCost="totalCost"
//       :importOverlay="importOverlay"
//       :actionHandler="actionHandler"
//       :digitFormatter="digitFormatter"
//       :state="receiverState"
//       :origin="origin"
//       :destination="destination"
//       :type="type"
//       :from="'Lagos'"
//       :to="''"
//     /> -->
//   </div>
// </template>

// <script>
// import { mapActions, mapGetters } from "vuex";
// import * as util from "@/Utils/helper_function";
// import StateData from "~/pages/Services/nationwide/StateData";
// import { Country, State, City } from "country-state-city";

// export default {
//   data() {
//     return {
//       activeTab: 1,
//       importOverlay: false,
//       loading: false,
//       tabs: [
//         {
//           id: 1,
//           title: "Import",
//           selectedCountry: "",
//           to: "Lagos",
//           weight: "",
//         },
//         {
//           id: 2,
//           title: "Export",
//           expressOption: "",
//           from: "",
//           to: "",
//           value: "",
//           weight: "",
//           itemValue: "",
//         },
//         {
//           id: 3,
//           title: "Nationwide",
//           from: "",
//           to: "",
//           weight: "",
//         },
//         {
//           id: 4,
//           title: "Movers",
//           from: "",
//           to: "",
//           floor1: "",
//           floor2: "",
//           truck: "",
//         },
//       ],
//       countries: [],
//       countryList: [],
//       selectedCountryId: "",
//       selectedCountry: "",
//       weight: "",
//       from: "",
//       to: "",
//       floor1: "",
//       floor2: "",
//       truck: "",
//       receiverCountry: "",
//       countryCode: "",
//       receiverState: "",
//       stateCode: "",
//       totalCost: 0,
//       itemValue: "",
//     };
//   },
//   watch: {
//     importOverlay() {
//       if (!this.importOverlay) {
//         this.reset();
//       }
//     },
//   },
//   computed: {
//     ...mapGetters({
//       getTracker: "tracker/getTracker",
//       getTotalCost: "shipment/getTotalCost",
//       loggedInUser: "index/loggedInUser",
//     }),
//     statesData: () => StateData,
//     countries_list() {
//       return Country.getAllCountries();
//     },
//     states_list() {
//       return State.getStatesOfCountry(this.countryCode);
//     },
//     origin() {
//       return this.activeTab !== 1 ? "Lagos" : this.selectedCountry;
//     },
//     destination() {
//       return this.activeTab == 1
//         ? "Lagos"
//         : this.activeTab == 2
//         ? this.receiverCountry
//         : this.receiverState;
//     },
//     type() {
//       return this.activeTab == 1
//         ? "import"
//         : this.activeTab == 2
//         ? "export"
//         : "nationwide";
//     },
//   },
//   mounted() {
//     this.getAddressInfo();
//   },
//   async mounted() {
//     this.$store.dispatch("shipment/unsetCost");
//     this.fetchExportCountries();
//   },
//   methods: {
//     reset() {
//       this.weight = "";
//       this.receiverCountry = "";
//       this.selectedCountryId = "";
//       this.countryCode = "";
//       this.stateCode = "";
//       this.receiverState = "";
//       this.itemValue = "";
//     },
//     // setReceiverCountry(e) {
//     //   console.log(JSON.parse(e.target.value));
//     //   this.receiverCountry = JSON.parse(e.target.value).name;
//     //   this.countryCode = JSON.parse(e.target.value).isoCode;
//     // },

//     setReceiverCountry(event) {
//       this.selectedCountryId = event.target.value; // Capture the selected country ID
//       this.receiverCountry = this.countryList.find(
//         (country) => country.id === parseInt(this.selectedCountryId)
//       ).name; // Optional: Capture the selected country name
//     },
//     setReceiverState(e) {
//       this.receiverState = JSON.parse(e.target.value).name;
//       this.stateCode =
//         JSON.parse(e.target.value).isoCode ?? JSON.parse(e.target.value).code;
//       console.log(this.stateCode);
//     },
//     activateTab(tabId) {
//       this.activeTab = tabId;
//     },
//     actionHandler() {
//       this.importOverlay = !this.importOverlay;
//     },

//     ...mapActions({
//       handleTracker: "tracker/handleTracker",
//       handleWeightCost: "shipment/handleWeightCost",
//     }),

//     handleCountryChange(event) {
//       const selectedOption = event.target.options[event.target.selectedIndex];
//       const countryName = selectedOption.getAttribute("data-countryName");
//       this.selectedCountry = countryName; // Output: the selected country name
//     },
//     async handleImportQuote() {
//       try {
//         // Check if tab has necessary properties
//         console.log(this.selectedCountry, this.weight);
//         if (this.selectedCountry && this.weight) {
//           this.loading = true;

//           const payload = {
//             location: this.selectedCountryId, // Ensure this matches the expected format
//             weight: parseFloat(this.weight),
//             user_id: this.$store.getters?.loggedInUser?.id ?? "",
//           };

//           // Log payload for debugging
//           console.log("Submitting form for tab", "with payload:", payload);

//           // Handle case when user is not logged in
//           if (!this.$store.getters.loggedInUser) {
//             delete payload.user_id;
//           }

//           // Example function call to handle weight cost (replace with your actual API call)
//           await this.handleWeightCost(payload);

//           // Reset loading state and toggle UI elements as needed
//           this.loading = false;
//           this.totalCost = this.getTotalCost;

//           this.actionHandler(); // Example of toggling an overlay
//         } else {
//           throw new Error("Incomplete or missing quote parameters.");
//         }
//       } catch (error) {
//         if (error.response) {
//           console.error(
//             "Server responded with error status:",
//             error.response.status
//           );
//           console.error("Error details:", error.response.data); // Log detailed error response

//           // Example: Display error message to user
//           if (error.response.data.errors) {
//             const errorMessages = Object.values(
//               error.response.data.errors
//             ).flat();
//             this.$toast.error(errorMessages.join(" "));
//           } else {
//             this.$toast.error(
//               "Failed to fetch quote. Please check your input."
//             );
//           }
//         } else if (error.request) {
//           console.error(
//             "Request made but no response received:",
//             error.request
//           );
//           this.$toast.error("Failed to fetch quote. Please try again later.");
//         } else {
//           console.error("Error setting up request:", error.message);
//           this.$toast.error("An unexpected error occurred. Please try again.");
//         }
//         this.loading = false;
//       }
//     },
//     // async bookExport() {
//     //   if (!this.weight) {
//     //     this.$toast.error("Please put a weight");
//     //     return;
//     //   }
//     //   if (!this.receiverState) {
//     //     this.$toast.error("Please choose receiver state");
//     //     return;
//     //   }
//     //   if (!this.receiverState) {
//     //     this.$toast.error("Please choose receiver country and state");
//     //     return;
//     //   }

//     //   const requestParams = {
//     //     origin_name: "Kikelomo Ogunniya",
//     //     origin_phone: "09123456789",
//     //     origin_street: "Lekki 1",
//     //     origin_city: "Lekki 1",
//     //     origin_country: "NIGERIA",
//     //     origin_country_code: "NG",
//     //     origin_state: "Lagos",
//     //     origin_state_code: "LA",
//     //     destination_name: "Ama",
//     //     destination_phone: "09123456789",
//     //     destination_street: "Lekki 1",
//     //     destination_city: "Lekki 2",
//     //     destination_country: this.receiverCountry,
//     //     destination_state: this.receiverState,
//     //     destination_country_code: this.countryCode,
//     //     destination_state_code: this.stateCode,
//     //     weight: this.weight,
//     //     items: [
//     //       {
//     //         name: "No name",
//     //         quantity: "1",
//     //         weight: this.weight,
//     //         amount: "0",
//     //         value: "0",
//     //       },
//     //     ],
//     //   };

//     //   await this.$axios
//     //     .post("/pickup/expedite-export/rate", requestParams)
//     //     .then((res) => {
//     //       console.log(res);
//     //       this.totalCost = res.data.data.j2g_quoted_fee;
//     //     })
//     //     .catch((err) => console.log(err));
//     // },

//     // async handleExportQuote() {
//     //   // e.preventDefault();
//     //   this.loading = true;
//     //   await this.bookExport();

//     //   this.actionHandler();

//     //   this.loading = false;
//     // },

//     async bookExport() {
//       try {
//         // Validate weight input
//         if (!this.weight) {
//           this.$toast.error("Please put a weight");
//           return;
//         }

//         // Validate receiver state input
//         // if (!this.receiverState) {
//         //   this.$toast.error("Please choose receiver state");
//         //   return;
//         // }
//         if (!this.itemValue) {
//           this.$toast.error("Please put item value");
//           return;
//         }
//         // Validate receiver country input (this was checked twice in your original code)
//         if (!this.receiverCountry) {
//           this.$toast.error("Please choose receiver country");
//           return;
//         }

//         // Prepare the request parameters according to your API requirements
//         const requestParams = {
//           country_id: this.selectedCountryId, // Assuming you have this mapped to the correct country
//           weight: this.weight,
//           item_value: this.itemValue || 0, // Defaulting to 0 if not provided
//         };

//         // Make the API request
//         const response = await this.$axios.post(
//           "/pickup/expedite-export/rate",
//           requestParams
//         );

//         // Handle the successful response
//         if (response.data && response.data.status === 200) {
//           console.log(response.data);
//           this.totalCost = response.data.data[0].result;
//         } else {
//           this.$toast.error("Failed to retrieve quote");
//         }
//       } catch (error) {
//         console.error(error);
//         this.$toast.error("An error occurred while fetching the quote");
//       }
//     },

//     async handleExportQuote() {
//       this.loading = true;

//       // Execute the export booking process
//       await this.bookExport();

//       // Perform any additional actions needed
//       this.actionHandler();

//       this.loading = false;
//     },

//     async bookNationWide() {
//       if (!this.weight) {
//         this.$toast.error("Please put a weight");
//         return;
//       }
//       if (!this.receiverState) {
//         this.$toast.error("Please choose receiver state");
//         return;
//       }
//       const requestParams = {
//         origin_name: "Kikelomo Ogunniya",
//         origin_phone: "09123456789",
//         origin_street: "Lekki 1",
//         origin_city: "Lekki 1",
//         origin_country: "NIGERIA",
//         origin_country_code: "NG",
//         origin_state: "Lagos",
//         origin_state_code: "LA",
//         destination_name: "Ama",
//         destination_phone: "09123456789",
//         destination_street: "Lekki 1",
//         destination_city: "Lekki 2",
//         destination_country: "NIGERIA",
//         destination_state: this.receiverState,
//         destination_country_code: "NG",
//         destination_state_code: this.stateCode,
//         weight: this.weight,
//         items: [
//           {
//             name: "No name",
//             quantity: "1",
//             weight: this.weight,
//             amount: "0",
//             value: "0",
//           },
//         ],
//       };

//       await this.$axios
//         .post("/pickup/nationwide/quickquote", requestParams)
//         .then((res) => {
//           console.log(res);
//           this.totalCost = res.data.data.j2g_quoted_fee;
//         })
//         .catch((err) => console.log(err));
//     },

//     async handleNationWideQuote() {
//       this.loading = true;
//       await this.bookNationWide();
//       this.actionHandler();

//       this.loading = false;
//     },
//     async getQuote(tabId) {
//       if (this.activeTab === 1) {
//         this.handleImportQuote();
//       }
//       if (this.activeTab === 2) {
//         this.handleExportQuote();
//       }
//       if (this.activeTab === 3) {
//         this.handleNationWideQuote();
//       }
//       // if (this.activeTab === 4) {
//       //   this.handleImportQuote();
//       // }
//     },
//     flattenCountryData(data) {
//       const result = [];
//       Object.keys(data).forEach((country) => {
//         data[country].forEach((warehouse) => {
//           result.push({
//             warehouse_name: warehouse.warehouse_name,
//             id: warehouse.id,
//             country,
//             estimated_delivery_days: warehouse.estimated_delivery_days,
//           });
//         });
//       });
//       return result;
//     },
//     //gidi2globe/locations
//     async fetchExportCountries() {
//       await this.$axios.get("/pickup/expedite-export/countries").then((res) => {
//         this.countryList = res.data.data;
//       });
//     },
//     async getAddressInfo() {
//       this.pageData = false;
//       await this.$axios
//         .get("importlocation")
//         .then((res) => {
//           this.countries = this.flattenCountryData(res.data.data);
//         })
//         .catch((err) => {
//           this.pageData = true;
//         });
//     },

//     trackShipment() {
//       this.handleTracker(!this.getTracker.isTrackerOpen);
//     },
//     digitFormatter(amount) {
//       return util.digitFormatter(amount);
//     },
//   },
// };
// </script>

// <!-- <script>
// // import { mapActions, mapGetters } from "vuex";
// // import * as util from "@/Utils/helper_function";
// // import importIcon from "../../assets/Svg/Home/hero_flight.svg";

// // export default {
// //   data() {
// //     return {
// //       importOverlay: false,
// //       loading: false,
// //       trackingNumber: null,
// //       selectedCountry: {
// //         name: "Select Origin Country",
// //         value: "",
// //       },

// //       weight: null,
// //       countryList: [
// //         { name: "Select Origin Country", value: "" },
// //         { name: "United States", value: 1 },
// //         { name: "Canada", value: 2 },
// //         { name: "United Kingdom", value: 3 },
// //         { name: "China", value: 4 },
// //       ],
// //     };
// //   },
// //   computed: {
// //     // ...mapGetters(["isAuthenticated", "loggedInUser"]),

// //     ...mapGetters({
// //       getTracker: "tracker/getTracker",
// //       getTotalCost: "shipment/getTotalCost",
// //       loggedInUser: "index/loggedInUser",
// //     }),
// //   },

// //   methods: {
// //     actionHandler() {
// //       this.importOverlay = !this.importOverlay;
// //     },
// //     ...mapActions({
// //       handleTracker: "tracker/handleTracker",
// //       handleWeightCost: "shipment/handleWeightCost",
// //     }),
// //     TrackShipment() {
// //       if (!this.trackingNumber) {
// //         this.$toast.error("Please insert a tracking number");
// //         return;
// //       }
// //       //   this.handleTracker(!this.getTracker.isTrackerOpen);
// //       if (this.trackingNumber.includes("G2G")) {
// //         this.$router.push(
// //           `/services/localdelivery/tracking/${this.trackingNumber}`
// //         );
// //       } else if (this.trackingNumber.includes("G2N")) {
// //         this.$router.push(
// //           `/services/nationwide/tracking/${this.trackingNumber}`
// //         );
// //       } else if (this.trackingNumber.includes("EXP")) {
// //         this.$router.push(`/services/export/tracking/${this.trackingNumber}`);
// //       } else if (this.trackingNumber.includes("MOV")) {
// //         this.$router.push(`/services/movers/tracking/${this.trackingNumber}`);
// //       } else {
// //         this.$router.push(`/status/${this.trackingNumber}`);
// //       }
// //       this.trackingNumber = "";
// //     },
// //     async getQuote() {
// //       if (this.selectedCountry.value && this.weight) {
// //         this.loading = true;

// //         if (
// //           this.selectedCountry.name.toLowerCase().includes("united kingdom") &&
// //           this.weight <= 1
// //         ) {
// //           this.weight = 2;
// //         }
// //         const payload = {
// //           location: this.selectedCountry.value,
// //           weight: this.weight,
// //           user_id: this.$store.getters?.loggedInUser?.id ?? "",
// //         };
// //         console.log(payload);
// //         if (!this.$store.getters.loggedInUser) delete payload.user_id;
// //         await this.handleWeightCost(payload);

// //         this.loading = false;
// //         this.importOverlay = !this.importOverlay;
// //       } else {
// //         this.$toast.error("Incomplete quote parameters");
// //       }
// //     },
// //     digitFormatter(amount) {
// //       return util.digitFormatter(amount);
// //     },
// //   },
// // };
// </script> -->

// <style lang="scss" scoped>
// .j2g-underline {
//   background: url("@/assets/Svg/underline.svg") bottom left no-repeat;
//   background-size: 100% 10px;
//   // padding-bottom: 8px;
//   width: 100%;
// }

// /* Optional custom styles can be added here */

// .tab-btn.active {
//   background-color: #ff9d00; /* Set active tab background color */

//   color: #0d4699; /* Set active tab text color */
// }

// .container {
//   border: #0000;
// }
// </style>

// <template>
//   <div>
//     <div
//       v-show="importOverlay"
//       @click.self="actionHandler"
//       class="px-10 flex justify-center cursor-pointer items-center overlay"
//     >
//       <div class="max-w-[500px] z-30 animate__animated animate__fadeInDown">
//         <div class="rounded-lg bg-white px-4 py-5">
//           <div class="flex justify-end">
//             <button @click="actionHandler">
//               <img
//                 src="@/assets/Svg/close.svg"
//                 class="ml-auto cursor-pointer"
//                 alt=""
//               />
//             </button>
//           </div>
//           <div class="w-full flex justify-center my-3">
//             <img src="@/assets/item-box.png" alt="" />
//           </div>

//           <div class="mx-[16px] grid-cols-12 grid gap-2 my-2 px-2">
//             <div class="space-y-4 flex col-span-7 flex-col text-[#656565]">
//               <p class="font-medium text-xs">Origin</p>
//               <p class="font-medium text-xs" v-if="type !== 'nationwide'">
//                 Destination
//               </p>
//               <p class="font-medium text-xs" v-show="state">State</p>
//               <p class="font-medium text-xs">Weight</p>
//             </div>
//             <div
//               class="space-y-4 col-span-5 flex flex-col items-end text-[#070A0F]"
//             >
//               <p class="text-xs">
//                 {{ origin }}
//               </p>
//               <p class="text-xs" v-if="type !== 'nationwide'">
//                 {{ destination }}
//               </p>
//               <p class="text-xs" v-show="state">{{ state }}</p>
//               <p class="text-xs">{{ weight }}kg</p>
//             </div>
//           </div>
//           <div
//             class="text-xs text-j2g-core font-semibold mx-[16px] py-4 px-2 rounded-sm grid-cols-12 grid gap-2 bg-[#F2F7F8] my-4"
//           >
//             <div class="col-span-7">ESTIMATED DELIVERY:</div>
//             <div class="col-span-5 text-right">
//               N{{ digitFormatter(getTotalCost) }}
//             </div>
//           </div>

//           <div class="flex flex-col text-xs font-medium">
//             <div
//               class="text-[#656565] font-light"
//               v-if="type !== 'nationwide' && type !== 'export'"
//             >
//               *Kindly note that this quote is based on today's exchange rate and
//               is exclusive of additional costs such as repackaging (if
//               required), compulsory insurance cover, and delivery to the
//               doorstep in Nigeria.
//             </div>

//             <div class="text-[#656565] font-light" v-if="type === 'export'">
//               *Please note this quote excludes repackaging fees, as well as any
//               other levies that might be required.
//             </div>
//           </div>

//           <nuxt-link to="/dashboard">
//             <button
//               class="bg-[#0D4699] w-full rounded-md my-4 py-3 px-4 text-[12px] font-medium text-white"
//             >
//               Book Now
//             </button></nuxt-link
//           >
//         </div>
//       </div>
//     </div>
//     <div
//       v-show="infoOverlay"
//       @click.self="infoOverlay = !infoOverlay"
//       class="px-10 flex justify-center cursor-pointer items-center overlay transform transition duration-300 bg-j2g-core"
//     >
//       <div class="z-30 animate__animated animate__fadeInDown">
//         <div class="rounded-lg bg-[#F7F7F7] px-4 py-5">
//           <span @click="infoOverlay = !infoOverlay">
//             <img
//               src="@/assets/Svg/close.svg"
//               class="ml-auto cursor-pointer"
//               alt=""
//             />
//           </span>
//           <div class="mx-auto my-3">
//             <img src="@/assets/info-box.png" alt="info-box" class="mx-auto" />
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </template>

// <script>
// export default {
//   props: [
//     "digitFormatter",
//     "selectedCountry",
//     "weight",
//     "getTotalCost",
//     "importOverlay",
//     "actionHandler",
//     "state",
//     "origin",
//     "destination",
//     "type",
//   ],
//   mounted() {
//     console.log(this.type);
//   },
//   data() {
//     return {
//       infoOverlay: false,
//     };
//   },
// };
// </script>

// <style lang="scss" scoped>
// .overlay {
//   position: fixed;
//   z-index: 9999999;
//   top: 0;
//   right: 0;
//   left: 0;
//   bottom: 0;
//   background: rgba(0, 0, 0, 0.4);
// }
// </style>
