import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Dashboard from "./views/Dashboard.vue";
import Forms from "./views/Forms.vue";
import Tables from "./views/Tables.vue";
import UIElements from "./views/UIElements.vue";
import Login from "./views/Login.vue";
import Modal from "./views/Modal.vue";
import Card from "./views/Card.vue";
import Blank from "./views/Blank.vue";
import Employee from "./views/Master/Employee.vue";
import Amanitis from "./views/Master/Amanitis.vue";
import HotelType from "./views/Master/HotelType.vue";
import Room from "./views/Master/Room.vue";
import HotelPackage from "./views/Master/HotelPackage.vue";
import Client from "./views/Master/Client.vue";
import HK from "./views/Master/Housekeeper.vue";
import RequestOrder from "./views/Transaction/RequestOrder.vue";
import PaymentHK from "./views/Transaction/PaymentHousekeeper.vue";
import PaymentConfirmation from "./views/Transaction/PaymentConfirmation.vue";
import HKReport from "./views/Report/HouseKeeperReport.vue";
import OrderReport from "./views/Report/OrderReport.vue";
import PaymentReport from "./views/Report/PaymentReport.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: { layout: "empty" },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/master/employee",
    name: "Employee",
    component: Employee,
  },
  {
    path: "/master/amanitis",
    name: "Amanitis",
    component: Amanitis,
  },
  {
    path: "/master/hoteltype",
    name: "HotelType",
    component: HotelType,
  },
  {
    path: "/master/room",
    name: "Room",
    component: Room,
  },
  {
    path: "/master/hotelpackage",
    name: "HotelPackage",
    component: HotelPackage,
  },
  {
    path: "/master/client",
    name: "Client",
    component: Client,
  },
  {
    path: "/master/housekeeper",
    name: "HK",
    component: HK,
  },
  {
    path: "/transaction/requestorder",
    name: "RequestOrder",
    component: RequestOrder,
  },
  {
    path: "/transaction/paymenthk",
    name: "PaymentHK",
    component: PaymentHK,
  },
  {
    path: "/transaction/confirmation",
    name: "PaymentConfirmation",
    component: PaymentConfirmation,
  },
  {
    path: "/report/order",
    name: "OrderReport",
    component: OrderReport,
  },
  {
    path: "/report/hk",
    name: "HKReport",
    component: HKReport,
  },
  {
    path: "/report/payment",
    name: "PaymentReport",
    component: PaymentReport,
  },
  {
    path: "/forms",
    name: "Forms",
    component: Forms,
  },
  {
    path: "/cards",
    name: "Cards",
    component: Card,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/ui-elements",
    name: "UIElements",
    component: UIElements,
  },
  {
    path: "/modal",
    name: "Modal",
    component: Modal,
  },
  {
    path: "/blank",
    name: "Blank",
    component: Blank,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
