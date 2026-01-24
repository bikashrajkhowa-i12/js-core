/********************************************************************** */
// without observer pattern it would look simple, readable but tightly coupled.
// its not wrong but it will be tightly coupled in a pricing logic which was not suppose to handle notification logic in it.

// if(priceChanged) {
//     emailService();
//     smsService();
//     dashboard();
//     mobileAppService();
// }

import { createPriceSubject } from "./subject.js";

import { emailService } from "./observers/emailService.js";
import { smsService } from "./observers/smsService.js";
import { dashboard } from "./observers/dashboard.js";
import { mobileAppService } from "./observers/mobileAppService.js";

const priceSubject = new createPriceSubject();

priceSubject.subscribe(emailService);
priceSubject.subscribe(smsService);
priceSubject.subscribe(dashboard);
priceSubject.subscribe(mobileAppService);
// priceSubject.unsubscribe(mobileAppService);

priceSubject.setPrice(300);
