<template>
  <Popover class="relative">
    <PopoverButton
      class="inline-flex items-center text-sm font-semibold leading-6 text-gray-900 gap-x-1"
    >
      <span>Solutions</span>
      <ChevronDownIcon class="w-5 h-5" aria-hidden="true" />
    </PopoverButton>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <PopoverPanel
        class="absolute z-10 flex w-screen px-4 mt-5 -translate-x-1/2 left-1/2 max-w-max"
      >
        <div
          class="flex-auto w-screen max-w-md overflow-hidden text-sm leading-6 bg-white shadow-lg rounded-3xl ring-1 ring-gray-900/5"
        >
          <div class="p-4">
            <div
              v-for="item in solutions"
              :key="item.name"
              class="relative flex p-4 rounded-lg group gap-x-6 hover:bg-gray-50"
            >
              <div
                class="flex items-center justify-center flex-none mt-1 rounded-lg h-11 w-11 bg-gray-50 group-hover:bg-white"
              >
                <component
                  :is="item.icon"
                  class="w-6 h-6 text-gray-600 group-hover:text-indigo-600"
                  aria-hidden="true"
                />
              </div>
              <div>
                <a :href="item.href" class="font-semibold text-gray-900">
                  {{ item.name }}
                  <span class="absolute inset-0" />
                </a>
                <p class="mt-1 text-gray-600">{{ item.description }}</p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
            <a
              v-for="item in callsToAction"
              :key="item.name"
              :href="item.href"
              class="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
            >
              <component
                :is="item.icon"
                class="flex-none w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
              {{ item.name }}
            </a>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/vue/20/solid";
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/vue/24/outline";

const solutions = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];
</script>
