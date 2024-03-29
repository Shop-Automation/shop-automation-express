"use strict";
//import StealthPlugin from "puppeteer-extra-plugin-stealth";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var puppeteer_extra_1 = __importDefault(require("puppeteer-extra"));
var puppeteer_extra_plugin_stealth_1 = __importDefault(require("puppeteer-extra-plugin-stealth"));
//import chromeLauncher from "chrome-launcher";
var puppeteer_1 = require("puppeteer");
var _a = require("./config.json"), email = _a.email, password = _a.password, product_url = _a.product_url, sneaker_size = _a.sneaker_size;
puppeteer_extra_1.default.use((0, puppeteer_extra_plugin_stealth_1.default)());
var chromeLauncher = require("chrome-launcher");
/* const Xvfb = require("xvfb");

const xvfb = new Xvfb();
xvfb.startSync(); */
var app = (0, express_1.default)();
var port = 3000;
var chromeConfig = {
    chromePath: "/usr/bin/google-chrome-stable",
};
var times = 0;
var size = sneaker_size;
var cardNumber = "4502144331007303";
var cardExp = "1223";
var cardCVV = "192";
app.get("/", function (req, res) {
    initialisePuppeteer();
});
var initialisePuppeteer = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            //await chromeLauncher.killAll();
            /*const chrome = await chromeLauncher.launch({
              startingUrl: "https://www.zalando.it",
              //userDataDir: false,
              //chromeFlags: ["--headless", "--disable-gpu"],
            });
        
            const response = await axios.get(
              `http://localhost:${chrome.port}/json/version`
            );
        
            const { webSocketDebuggerUrl } = response.data;*/
            //const page = browser.newPage();
            /* const browser = await puppeteer.connect({
              browserWSEndpoint: webSocketDebuggerUrl,
            }); */
            //screenshotView();
            /* await page.setExtraHTTPHeaders({
            "Accept-Language": "en-US,en;q=0.9",
          }); */
            /* const client = await page.target().createCDPSession();
          await client.send("Network.clearBrowserCookies");
          await client.send("Network.clearBrowserCache"); */
            /*  await page.setUserAgent(
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
              //"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"
            ); */
            //await page.goto("https://arh.antoinevastel.com/bots/areyouheadless");
            //setTimeout(async (page:any) => {
            //googleLogin();
            /* await page.waitForSelector('a[title="Accedi"]');
          await page.click('a[title="Accedi"]');
          await page.goto("https://www.zalando.it");
          await page.waitForSelector('a[title="Accedi"]'); */
            /* await page.goto("https://www.zalando.it/" + new Date().getTime());
          await page.goto(
            "https://www.zalando.it/jordan-air-1-mid-se-sneakers-alte-blackinfraredwhitesail-joc12n023-q11.html"
          );
          await page.goto("https://www.zalando.it");
          await page.waitForSelector("article"); */
            //await page.click("article a");
            runBot();
        }
        catch (error) {
            console.log(error);
        }
        return [2 /*return*/];
    });
}); };
var runBot = function () { return __awaiter(void 0, void 0, void 0, function () {
    var browser, _a, _b, page, error_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 4, , 5]);
                return [4 /*yield*/, puppeteer_extra_1.default.launch({
                        //ignoreDefaultArgs: ["--enable-automation"],
                        //args: ["--disable-blink-features=AutomationControlled"],
                        args: [
                            '--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
                        ],
                        headless: false,
                        product: "chrome",
                        executablePath: (0, puppeteer_1.executablePath)(),
                    })];
            case 1:
                browser = _c.sent();
                _b = (_a = console).log;
                return [4 /*yield*/, browser.userAgent()];
            case 2:
                _b.apply(_a, [_c.sent()]);
                return [4 /*yield*/, browser.pages()];
            case 3:
                page = (_c.sent())[0];
                randomEvent(page);
                screenshotView(page);
                return [3 /*break*/, 5];
            case 4:
                error_1 = _c.sent();
                console.log(error_1);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
var screenshotView = function (page) {
    var screenshotInterval;
    clearInterval(screenshotInterval);
    screenshotInterval = setInterval(function () { return __awaiter(void 0, void 0, void 0, function () {
        var error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, page.screenshot({ path: "./screen.jpg" })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.log(error_2);
                    screenshotView(page);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); }, 500);
};
var googleLogin = function (page) { return __awaiter(void 0, void 0, void 0, function () {
    var error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                return [4 /*yield*/, page.goto("https://accounts.google.com/ServiceLogin?hl=it&amp;passive=true&amp;continue=https://www.google.it/&amp;ec=GAZAmgQ")];
            case 1:
                _a.sent();
                return [4 /*yield*/, page.type('input[type="email"]', email)];
            case 2:
                _a.sent();
                return [4 /*yield*/, page.keyboard.press("Enter")];
            case 3:
                _a.sent();
                return [4 /*yield*/, page.waitForNavigation()];
            case 4:
                _a.sent();
                setTimeout(function (page) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: 
                            //await page.waitForSelector('input[type="password"]');
                            return [4 /*yield*/, page.type('input[type="password"]', password)];
                            case 1:
                                //await page.waitForSelector('input[type="password"]');
                                _a.sent();
                                return [4 /*yield*/, page.click('button[data-testid="login_button"]')];
                            case 2:
                                _a.sent();
                                return [4 /*yield*/, page.waitForNavigation()];
                            case 3:
                                _a.sent();
                                zalandoLogin(page);
                                return [2 /*return*/];
                        }
                    });
                }); }, 5000);
                return [3 /*break*/, 6];
            case 5:
                error_3 = _a.sent();
                console.log(error_3);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
var randomEvent = function (page) { return __awaiter(void 0, void 0, void 0, function () {
    var clickSelector, randomArray, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                console.log("RANDOM EVENT");
                return [4 /*yield*/, page.goto("https://www.zalando.it/".concat(Math.random() > 0.5 ? "uomo" : "donna", "-home"))];
            case 1:
                _a.sent();
                clickSelector = "li";
                randomArray = Array.from(Array(Math.floor(Math.random() * 5)));
                console.log(randomArray);
                clickSelector = randomArray.reduce(function (acc, _) { return acc.concat(" ~ li"); }, clickSelector);
                clickSelector = clickSelector.concat(" article a");
                console.log(clickSelector);
                return [4 /*yield*/, page.waitForSelector("article")];
            case 2:
                _a.sent();
                return [4 /*yield*/, page.click("".concat(clickSelector))];
            case 3:
                _a.sent();
                setTimeout(function () {
                    zalandoLogin(page);
                }, 4000);
                return [3 /*break*/, 5];
            case 4:
                error_4 = _a.sent();
                console.log(error_4);
                randomEvent(page);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
var zalandoLogin = function (page) { return __awaiter(void 0, void 0, void 0, function () {
    var USERNAME_1, PASSWORD, typeTimeout, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                console.log("LOGIN");
                return [4 /*yield*/, page.goto("https://www.zalando.it/myaccount")];
            case 1:
                _a.sent();
                USERNAME_1 = email;
                PASSWORD = password;
                return [4 /*yield*/, page.waitForSelector('input[id="login.email"]')];
            case 2:
                _a.sent();
                typeTimeout = Array.from(USERNAME_1).length * 100 + Array.from(PASSWORD).length * 100;
                Array.from(USERNAME_1).map(function (letter, i) {
                    return setTimeout(function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, page.type('input[id="login.email"]', letter)];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }, i * 100);
                });
                Array.from(PASSWORD).map(function (letter, i) {
                    return setTimeout(function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, page.type('input[id="login.secret"]', letter)];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }, Array.from(USERNAME_1).length * 100 + i * 100);
                });
                setTimeout(function () { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, page.keyboard.press("Enter")];
                            case 1:
                                _a.sent();
                                console.log("LOGIN WAITING...");
                                setTimeout(function () { return __awaiter(void 0, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, page.url().includes("https://www.zalando.it/myaccount")];
                                            case 1:
                                                (_a.sent())
                                                    ? checkProduct(page)
                                                    : randomEvent(page);
                                                return [2 /*return*/];
                                        }
                                    });
                                }); }, 8000);
                                return [2 /*return*/];
                        }
                    });
                }); }, typeTimeout + 2000);
                return [3 /*break*/, 4];
            case 3:
                error_5 = _a.sent();
                console.log(error_5);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var checkProduct = function (page) { return __awaiter(void 0, void 0, void 0, function () {
    var productsCheck, cleanProducts, buyButtonValue, _a, error_6;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 15, , 16]);
                console.log("CHECK PRODUCT");
                return [4 /*yield*/, page.goto(product_url)];
            case 1:
                _b.sent();
                return [4 /*yield*/, page.waitForSelector("#picker-trigger")];
            case 2:
                _b.sent();
                return [4 /*yield*/, page.click("#picker-trigger")];
            case 3:
                _b.sent();
                return [4 /*yield*/, page.waitForSelector('form[name="size-picker-form"]')];
            case 4:
                _b.sent();
                return [4 /*yield*/, page.$$eval('form[name="size-picker-form"] label', function (options) {
                        return options.map(function (option) {
                            var spans = Array.from(option.querySelectorAll("span"));
                            spans[0].textContent = option.htmlFor;
                            return spans.map(function (span) { return span.textContent; });
                        });
                    })];
            case 5:
                productsCheck = _b.sent();
                cleanProducts = productsCheck
                    .filter(function (product) {
                    return product[1] === size && !product.find(function (p) { return p === "Esaurito"; });
                })
                    .flat();
                console.log("CLEAN PRODUCTS: ", cleanProducts);
                if (!cleanProducts.length) return [3 /*break*/, 13];
                return [4 /*yield*/, page.$eval('div[data-testid="pdp-add-to-cart"] button span', function (span) { return span.textContent; })];
            case 6:
                buyButtonValue = _b.sent();
                console.warn("BUY BUTTON VALUE: ", buyButtonValue);
                return [4 /*yield*/, page.click("label[for=\"".concat(cleanProducts[0], "\"]"))];
            case 7:
                _b.sent();
                return [4 /*yield*/, page.click('div[data-testid="pdp-add-to-cart"] button')];
            case 8:
                _b.sent();
                _a = buyButtonValue === "Aggiungi al carrello";
                if (!_a) return [3 /*break*/, 10];
                return [4 /*yield*/, page.goto("https://www.zalando.it/cart/")];
            case 9:
                _a = (_b.sent());
                _b.label = 10;
            case 10:
                _a;
                return [4 /*yield*/, page.waitForSelector('button[class*="__button-checkout"]')];
            case 11:
                _b.sent();
                return [4 /*yield*/, page.click('button[class*="__button-checkout"]')];
            case 12:
                _b.sent();
                buy(page);
                return [3 /*break*/, 14];
            case 13:
                console.log("NOT FOUND - Reload");
                checkProduct(page);
                _b.label = 14;
            case 14: return [3 /*break*/, 16];
            case 15:
                error_6 = _b.sent();
                checkProduct(page);
                console.log(error_6);
                return [3 /*break*/, 16];
            case 16: return [2 /*return*/];
        }
    });
}); };
var goToCart = function (page) { return __awaiter(void 0, void 0, void 0, function () {
    var error_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, page.goto("https://www.zalando.it/cart/")];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                error_7 = _a.sent();
                console.log(error_7);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
//CHECK PAYMENT ON CONFIRM
var checkPaymentOnConfirm = function (page) { return __awaiter(void 0, void 0, void 0, function () {
    var result, paymentMethodId, textContent, cardNumberLast4, error_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 7, , 8]);
                return [4 /*yield*/, page.url().includes("something-went-wrong")];
            case 1:
                if (!_a.sent()) return [3 /*break*/, 2];
                checkProduct(page);
                return [3 /*break*/, 6];
            case 2: return [4 /*yield*/, page.waitForSelector('div[class*="pay-token-confirmation')];
            case 3:
                _a.sent();
                return [4 /*yield*/, page.$eval('div[class*="pay-token-confirmation', function (_a) {
                        var paymentMethodId = _a.dataset.paymentMethodId, textContent = _a.textContent;
                        return ({
                            paymentMethodId: paymentMethodId,
                            textContent: textContent,
                        });
                    })];
            case 4:
                result = _a.sent();
                console.log(result);
                paymentMethodId = result.paymentMethodId, textContent = result.textContent;
                cardNumberLast4 = cardNumber.substring(cardNumber.length - 4);
                return [4 /*yield*/, page.click(paymentMethodId === "CREDIT_CARD" &&
                        textContent.includes(cardNumberLast4)
                        ? 'div[class*="pay-token-confirmation"] form button[type="submit"]' // 'button[data-id*="confirmation-buyNow-bottom"]'
                        : 'div[class*="pay-token-confirmation"] form button[type="submit"]')];
            case 5:
                _a.sent();
                selectCreditCardOnPayment(page);
                _a.label = 6;
            case 6: return [3 /*break*/, 8];
            case 7:
                error_8 = _a.sent();
                buy(page);
                console.log("checkPaymentOnConfirm ERROR: ", error_8);
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); };
//SELECT CREDIT CARD ON PAYMENT
var selectCreditCardOnPayment = function (page) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, error_9;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 9, , 10]);
                //SELECT CREDIT CARD PAYMENT
                console.log("SELECT CREDIT CARD PAYMENT");
                return [4 /*yield*/, page.waitForSelector('label[for="cc"]')];
            case 1:
                _b.sent();
                return [4 /*yield*/, page.click('label[for="cc"]')];
            case 2:
                _b.sent();
                _b.label = 3;
            case 3:
                _b.trys.push([3, 7, , 8]);
                //TRY USE EXISTING CREDIT CARD
                console.log("TRY USE EXISTING CREDIT CARD");
                return [4 /*yield*/, page.waitForSelector('input[name="funding-source-payment-card"] ~ div label')];
            case 4:
                _b.sent();
                return [4 /*yield*/, page.click('input[name="funding-source-payment-card"] ~ div label')];
            case 5:
                _b.sent();
                return [4 /*yield*/, page.click('button[class*="z-1-button"]')];
            case 6:
                _b.sent();
                checkPaymentOnConfirm(page);
                return [3 /*break*/, 8];
            case 7:
                _a = _b.sent();
                addNewCreditCard(page);
                return [3 /*break*/, 8];
            case 8: return [3 /*break*/, 10];
            case 9:
                error_9 = _b.sent();
                checkPaymentOnConfirm(page);
                console.log("selectCreditCardOnPayment ERROR: ", error_9);
                return [3 /*break*/, 10];
            case 10: return [2 /*return*/];
        }
    });
}); };
//ADD NEW CREDIT CARD
var addNewCreditCard = function (page) { return __awaiter(void 0, void 0, void 0, function () {
    var error_10;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                return [4 /*yield*/, page.click('input[id="NEW_PAYMENT_CARD"]')];
            case 1:
                _a.sent();
                return [4 /*yield*/, page.type('input[id="name-on-card-input-field"]', "Michele Tornello")];
            case 2:
                _a.sent();
                return [4 /*yield*/, page.type('input[id="card-number-input-field"]', cardNumber)];
            case 3:
                _a.sent();
                return [4 /*yield*/, page.type('input[id="exp-input-field"]', cardExp)];
            case 4:
                _a.sent();
                return [4 /*yield*/, page.type('input[id="cvv-input-field"]', cardCVV)];
            case 5:
                _a.sent();
                return [3 /*break*/, 7];
            case 6:
                error_10 = _a.sent();
                console.log("addNewCreditCard ERROR: ", error_10);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
var buy = function (page) { return __awaiter(void 0, void 0, void 0, function () {
    var error_11, error_12;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 17, , 18]);
                console.log("BUY FUNCTION");
                return [4 /*yield*/, page.url().includes("/confirm")];
            case 1:
                if (!_a.sent()) return [3 /*break*/, 2];
                console.log("CONFIRM PAGE");
                checkPaymentOnConfirm(page);
                return [3 /*break*/, 16];
            case 2: return [4 /*yield*/, page.url().includes("/payment")];
            case 3:
                if (!_a.sent()) return [3 /*break*/, 4];
                console.log("PAYMENT");
                selectCreditCardOnPayment(page);
                return [3 /*break*/, 16];
            case 4: return [4 /*yield*/, page.url().includes("/address")];
            case 5:
                if (!_a.sent()) return [3 /*break*/, 15];
                console.log("ADDRESS");
                _a.label = 6;
            case 6:
                _a.trys.push([6, 11, , 14]);
                return [4 /*yield*/, page.waitForSelector('a[class*="deliveryDestinationTab_option_HOME"]')];
            case 7:
                _a.sent();
                return [4 /*yield*/, page.click('a[class*="deliveryDestinationTab_option_HOME"]')];
            case 8:
                _a.sent();
                return [4 /*yield*/, page.waitForSelector('button[data-id*="proceedToPayment"]')];
            case 9:
                _a.sent();
                return [4 /*yield*/, page.click('button[data-id*="proceedToPayment"]')];
            case 10:
                _a.sent();
                buy(page);
                return [3 /*break*/, 14];
            case 11:
                error_11 = _a.sent();
                console.log("ADDRESS ERROR", error_11);
                return [4 /*yield*/, page.waitForSelector('button[data-id*="proceedToPayment"]')];
            case 12:
                _a.sent();
                return [4 /*yield*/, page.click('button[data-id*="proceedToPayment"]')];
            case 13:
                _a.sent();
                buy(page);
                return [3 /*break*/, 14];
            case 14: return [3 /*break*/, 16];
            case 15:
                setTimeout(function () {
                    buy(page);
                }, 1000);
                _a.label = 16;
            case 16: return [3 /*break*/, 18];
            case 17:
                error_12 = _a.sent();
                buy(page);
                console.log("BUY ERROR: ", error_12);
                return [3 /*break*/, 18];
            case 18: return [2 /*return*/];
        }
    });
}); };
app.listen(port, function () {
    initialisePuppeteer();
});
