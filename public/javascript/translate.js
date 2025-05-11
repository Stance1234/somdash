function googleTranslateElementInit() {
	new google.translate.TranslateElement(
		{
			pageLanguage: "en",
			// includedLanguages: "ar,es,de,fr,pt,ru,tr,zh-CN,in,it,de,se,id,vn,vi,th,fa",
			layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
		},
		"google_translate_element"
	)
}
