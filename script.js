// Initialization for ES Users
import {
    Ripple,
    initTE,
  } from "tw-elements";
  
  initTE({ Ripple });

  // Initialization for ES Users
import { Select, initTE } from "tw-elements";
initTE({ Select });

import {
    Datepicker,
    Input,
    initTE,
  } from "tw-elements";
  
  initTE({ Datepicker, Input });
  
  const datepickerTranslated = new Datepicker(
    document.querySelector("#datepicker-translated"),
    {
      title: "Datum auswählen",
      monthsFull: [
        "Januar",
        "Februar",
        "März",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Dezember",
      ],
      monthsShort: [
        "Jan",
        "Feb",
        "Mär",
        "Apr",
        "Mai",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Okt",
        "Nov",
        "Dez",
      ],
      weekdaysFull: [
        "Sonntag",
        "Montag",
        "Dienstag",
        "Mittwoch",
        "Donnerstag",
        "Freitag",
        "Samstag",
      ],
      weekdaysShort: ["Son", "Mon", "Die", "Mit", "Don", "Fre", "Sam"],
      weekdaysNarrow: ["S", "M", "D", "M", "D", "F", "S"],
      okBtnText: "Ok",
      clearBtnText: "Klar",
      cancelBtnText: "Schließen",
    }
  );