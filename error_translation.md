---
title: How to change language of error validation on front end-Bagisto
layout: default
---

# How to change language of error validation on front end

![](assets/images/icons/Icon-Pencil-Large.svg){:.pencil-icon}
[edit on github](https://github.com/bagisto/bagisto-docs/blob/master/error_translation.md){:.edit-github target="\_blank"}

If you want to make your website easily accessible to customers in multiple languages and expand your business to a global level then language translation is imperative for your website. It will help you get more traffic and further generate sales.

By using language translation in Bagisto, you can easily localise your website for many global or regional languages. Your customer can easily translate your whole website just by a single click which also plays a major role in website SEO in the respective region and to show validation messages as per your locale, you need to follow these below steps:

### Steps to change language of error validation

1. Within Shop package, go to src/Resources/assets/js/lang/locales.js

2. define your error translation for your locale code as shown below in screenshot

![error-translation](assets/images/Bagisto_Docs_Images/user-guide/locale-trans.png){: .screenshot-dimension .center}

3. Now, within app.js, add " ar: { messages: locales.messages.ar } " for your locale code in dictionary property such as ar-for arabic

   ```javascript
   Vue.use(VeeValidate, {
     dictionary: {
       ar: { messages: locales.messages.ar }
     }
   });
   ```
