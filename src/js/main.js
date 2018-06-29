/**
 * Currency-Converter - Design Components in CSS, JS and HTML
 * @version v1.2.1
 * @license Apache-2.0
 * @copyright 2015 Google, Inc.
 * @link https://github.com/bl4ck4ndbr0wn/Currency-Converter
 */

import Forms from "./components/Form";

//  Initializing the classes
const forms = new Forms();

//Forms functions
forms.getAllCurrencies();

forms.onChange();
forms.onSubmit();
