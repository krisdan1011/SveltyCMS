import type { Translation } from '../i18n-types';

const de: Translation = {
	// SideBar left
	SBL_Search: 'Suchen ...',
	SBL_Admin: 'Admin',
	SBL_Admin_User: 'Admin Benutzer',
	SBL_SystemLanguage: 'Systemspache',
	SBL_User: 'Benutzerprofil',
	SBL_isDark: 'Wechsel zum',
	SBL_Light: 'Hell',
	SBL_Dark: 'Dunkel',
	SBL_Mode: 'Modus',
	SBL_Version: 'Ver.',
	SBL_Ver: 'Ver.',
	SBL_Save: 'Speichern',
	SBL_Save_message: 'Daten erfolgreich gespeichert',
	SBL_SignOut: 'Abmelden',
	SBL_Konfiguration: 'Systemkonfiguration',
	SBL_GithubDiskussion: 'Github Diskussion',

	// Collections
	CollectionCategory_Collection: 'Kollektion',
	CollectionCategory_Menu: 'Menü',
	CollectionCategory_Media: 'Medien',

	// System Builder
	BUILDER_PageTitle: 'Systemkonfiguration',
	BUILDER_First: 'Erstellen Sie eine erste Kollektion, um loszulegen',
	BUILDER_Save: 'Speichern',
	BUILDER_AddCategory: 'Kategorie hinzufügen',
	BUILDER_AddCollection: 'Kollektion hinzufügen',
	BUILDER_Unassigned: 'Nicht zugewiesen',

	// SideBar Right

	// Error
	ERROR_Pagenotfound: 'Seite nicht gefunden',
	ERROR_Wrong: 'Es tut uns leid, etwas ist schief gelaufen.',
	ERROR_GoHome: 'Zur Startseite',

	//LOADING
	LOADING_Wait: 'Bitte Warten',
	LOADING_Loading: 'es lädt...',

	// USER
	USER_Setting: 'Benutzereinstellungen',
	USER_ID: 'Benutzer-ID',
	USER_Username: 'Benutzername',
	USER_FirstName: 'Vorname',
	USER_LastName: 'Nachname',
	USER_Email: 'E-Mail',
	USER_Password: 'Passwort',
	USER_NewPassword: 'Neues Password:',
	USER_Edit: 'Benutzer bearbeiten',
	USER_Fail: 'E-Mail bereits in Gebrauch',
	USER_Delete: 'Löschen',
	USER_Cancel: 'Abbrechen',
	USER_Save: 'Speichern',
	USER_PageTitle: 'Benutzerprofil',
	USER_Edit_Avatar: 'Avatar bearbeiten',
	USER_Role: 'Rolle',

	//User AdminArea
	USER_AdminArea_Generate: 'E-Mail-Benutzerregistrierungstoken',
	USER_AdminArea_ShowUser: 'Benutzerliste anzeigen',
	USER_AdminArea_UserCollapse: 'Benutzerliste ausblenden',
	USER_AdminArea_ShowToken: 'Token anzeigen',
	USER_AdminArea_TokenCollapse: 'Token ausblenden',
	USER_AdminArea_EmailToken: 'Benutzerregistrierungstoken',
	USER_AdminArea_ListToken: 'Token-Liste:',
	USER_AdminArea_ListUser: 'Benutzerliste:',
	USER_AdminArea_title: 'Adminbereich:',
	USER_AdminArea_Blocked: 'Gesperrt',
	USER_AdminArea_Avatar: 'Avatar',
	USER_AdminArea_Username: 'Benutzername',
	USER_AdminArea_Access: 'Letzter Zugriff',
	USER_AdminArea_Sessions: 'Aktive Sitzungen',
	USER_AdminArea_ExpiresIn: 'Läuft ab in',
	USER_AdminArea_MemberFor: 'Mitglied für',
	USER_AdminArea_UserID: 'Benutzer-ID',
	USER_AdminArea_Email: 'E-Mail',
	USER_AdminArea_Token: 'Token',
	USER_AdminArea_Role: 'Rolle:',
	USER_AdminArea_CreatedAt: 'Erstellt am',
	USER_AdminArea_UpdatedAt: 'Aktualisiert am',

	// Media Gallery
	MEDIAGALLERY_Pagetitle: 'Mediengalerie',
	MEDIAGALLERY_Display: 'Anzeige',
	MEDIAGALLERY_Grid: 'Raster',
	MEDIAGALLERY_Tabelle: 'Tabelle',
	MEDIAGALLERY_Größe: 'Größe',
	MEDIAGALLERY_Small: 'Klein',
	MEDIAGALLERY_Medium: 'Mittel',
	MEDIAGALLERY_Large: 'Groß',

	// Config
	CONFIG_Pagetitle: 'Systemkonfiguration',
	CONFIG_Body: 'Wählen Sie Ihre Konfiguration',
	CONFIG_SystemBuilder: 'System Builder',

	// Tanstack
	TANSTACK_UserList: 'Liste der Benutzer:',
	TANSTACK_Column: 'Spalten',
	TANSTACK_Toggle: 'Alle',
	TANSTACK_Filter: 'Facetten-Filter',
	TANSTACK_Export: 'XML-Export',
	TANSTACK_Page: 'Seite',
	TANSTACK_of: 'von',
	TANSTACK_Total: 'Gesamt',
	TANSTACK_Row: 'Zeile',
	TANSTACK_Rows: 'Zeilen',
	TANSTACK_Yes: 'Ja',
	TANSTACK_No: 'Nein',

	//Modal User Token
	MODAL_UserToken_Title: 'Generiere ein Benutzer-Registrierungs-Token',
	MODAL_UserToken_Body: 'Trage die E-Mail, Rolle & die Gültigkeit ein & drücke auf Senden.',
	MODAL_UserToken_Role: 'Benutzerrolle:',
	MODAL_UserToken_Validity: 'Token Gültigkeit:',
	MODAL_UserToken_Cancel: 'Abbrechen',
	MODAL_BenutzerToken_Senden: 'Senden',

	//Modal User OAuth
	MODAL_UserOAuth_Title: 'Geben Sie den Benutzer-Token ein, um sich anzumelden:',
	MODAL_UserOAuth_Placeholder: 'Geben Sie Ihr empfangenes Token ein',
	MODAL_UserOAuth_Cancel: 'Abbrechen',
	MODAL_UserOAuth_Submit: 'Mit Google anmelden',

	//Modal MultiButtonToken
	MODAL_MultiButtonToken_Titel: 'Token-Daten bearbeiten',
	MODAL_MultiButtonToken_Body: 'Ändern Sie diese Token-Daten und drücken Sie dann auf Speichern',
	MODAL_MultiButtonToken_DeleteTitle: 'Bitte bestätigen Sie die Löschung des Benutzers',
	MODAL_MultiButtonToken_DeleteBody: 'Sind Sie sicher, dass Sie diesen Benutzer löschen möchten?',
	MODAL_MultiButtonToken_DeleteButtonText: 'Benutzer löschen',
	MODAL_MultiButtonToken_BlockTitle: 'Bitte bestätigen Sie die Benutzersperre',
	MODAL_MultiButtonToken_BlockBody: 'Sind Sie sicher, dass Sie diesen Benutzer sperren möchten?',
	MODAL_MultiButtonToken_BlockButtonText: 'Benutzer sperren',
	MODAL_MultiButtonToken_UnBlockTitle: 'Bitte bestätigen Sie die Entsperrung des Benutzers',
	MODAL_MultiButtonToken_UnBlockBody: 'Sind Sie sicher, dass Sie diesen Benutzer entsperren möchten?',
	MODAL_MultiButtonToken_UnBlockButtonText: 'Benutzer entsperren',

	//Modal User Avatar
	MODAL_UserAvatar_Title: 'Bearbeiten Sie Ihren Avatar:',
	MODAL_UserAvatar_Body: 'Avatarbild hochladen und Speichern drücken.',
	MODAL_UserAvatar_FileSize: 'Die Dateigröße muss weniger als 5 MB betragen',
	MODAL_UserAvatar_Unsupported: 'Unterstützte Formate: jpeg, jpg, png, webp, avif, svg, gif',
	MODAL_UserAvatar_FilesAllowed: 'PNG, JPEG, GIF, SVG, WEBP, AVIF erlaubt',
	MODAL_UserAvatar_Delete: 'Löschen',
	MODAL_UserAvatar_Cancel: 'Abbrechen',
	MODAL_UserAvatar_Save: 'Speichern',

	//Modal User Edit
	MODAL_UserEdit_Title: 'Benutzerdaten bearbeiten:',
	MODAL_UserEdit_Body: 'Ändern Sie Ihre Daten und Speichern drücken.',
	MODAL_UserEdit_Role: 'Benutzer Role:',
	MODAL_UserEdit_Cancel: 'Abbrechen',
	MODAL_UserEdit_Save: 'Speichern',

	//Modal User Delete
	MODAL_UserConfirm_Title: 'Bitte bestätigen Sie die Löschung des Benutzers:',
	MODAL_UserConfirm_Body: 'Dies kann nicht rückgängig gemacht werden. Sind Sie sicher, dass Sie fortfahren möchten?',
	MODAL_UserConfirm_Cancel: 'Abbrechen',
	MODAL_UserConfirm_Delete: 'Benutzer löschen',

	//Modal Category
	MODAL_Category_Title: 'Kategorie bearbeiten',
	MODAL_Category_Body: 'Ändern Sie Ihre Kategorie',
	MODAL_Category_Name: 'Kategoriename:',
	MODAL_Category_Placeholder: 'Kategoriename eingeben...',
	MODAL_Category_Delete: 'Löschen',
	MODAL_Category_Cancel: 'Abbrechen',
	MODAL_Category_Save: 'Speichern',

	//Modal Add Category
	MODAL_AddCetegory_Title: 'Generiere ein Benutzer-Registrierungs-Token',
	MODAL_AddCetegory_Body: 'Trage die E-Mail, Rolle & die Gültigkeit ein & drücke auf Senden.',
	MODAL_AddCetegory_Role: 'Benutzerrolle:',
	MODAL_AddCetegory_Validity: 'Token Gültigkeit:',
	MODAL_AddCetegory_Cancel: 'Abbrechen',
	MODAL_AddCetegory_Senden: 'Senden',

	//Modal Iconpicker
	MODAL_IconPicker_Label: 'Icon:',
	MODAL_IconPicker_Name: 'Name:',
	MODAL_IconPicker_Placeholder: 'Suche nach einem Icon...',
	MODAL_IconPicker_Select: 'Aus Google Material Icons auswählen',
	MODAL_IconPicker_Previous: 'Vorherige',
	MODAL_IconPicker_Next: 'Nächster',

	// Login
	LOGIN_SignIn: 'Anmelden',
	LOGIN_SignUp: 'Registrieren',
	LOGIN_Required: '* Erforderlich',
	LOGIN_Username: 'Benutzername',
	LOGIN_EmailAddress: 'E-Mail Adresse',
	LOGIN_Password: 'Passwort',
	LOGIN_Token: 'Anmeldungs Token',
	LOGIN_ConfirmPassword: 'Passwort bestätigen',
	LOGIN_ForgottenPassword: 'Kennwort vergessen',
	LOGIN_ForgottenPassword_text: 'Machen Sie sich keine Sorgen. Wir helfen Ihnen, Ihr Passwort wiederzufinden.',
	LOGIN_ForgottenPassword_Toast: 'Passwort zurücksetzen Token wurde auch per E-Mail gesendet',
	LOGIN_SendResetMail: 'E-Mail Passwort senden',
	LOGIN_ResetPassword: 'Passwort zurücksetzen',
	LOGIN_ResetPasswordSave: 'Neues Password speichern',
	LOGIN_ResetPassword_Toast: 'Passwort zurücksetzen Token wurde auch per E-Mail gesendet',
	LOGIN_SignInSuccess: 'Erfolgreich Angemeldet',

	LOGIN_ZOD_Username_string: 'Benutzername ist erforderlich',
	LOGIN_ZOD_Username_regex: 'Der Name darf nur Buchstaben, Ziffern und @$!%*# enthalten',
	LOGIN_ZOD_Username_min: 'Name muss aus mindestens 2 Zeichen bestehen',
	LOGIN_ZOD_Username_max: 'Der Name darf nur 24 Zeichen lang sein',
	LOGIN_ZOD_Email_string: 'E-Mail ist erforderlich',
	LOGIN_ZOD_Email_email: 'E-Mail muss eine gültige E-Mail sein',
	LOGIN_ZOD_Password_string: 'Passwort ist erforderlich',
	LOGIN_ZOD_Password_regex:
		'Das Passwort muss mindestens 8 Zeichen lang sein und mindestens einen Buchstaben, eine Zahl und ein Sonderzeichen enthalten.',
	LOGIN_ZOD_Confirm_password_string: 'Passwortbestätigung ist erforderlich',
	LOGIN_ZOD_Confirm_password_regex:
		'Das Passwort muss aus mindestens 8 Zeichen bestehen und mindestens einen Buchstaben, eine Zahl und ein Sonderzeichen enthalten.',
	LOGIN_ZOD_Token_string: 'Auth Token ist erforderlich',
	LOGIN_ZOD_Password_match: 'Passwort und Bestätigung müssen übereinstimmen',

	LOGIN_ZOD_General_Unknown: 'Unbekannter Fehler aufgetreten',
	LOGIN_ZOD_General_Error: 'Ungültige Eingabe',
	LOGIN_ZOD_Email_Error_inUse: 'E-Mail bereits in Gebrauch',
	LOGIN_ZOD_Email_Error_send: 'Fehler beim Senden einer E-Mail',
	LOGIN_ZOD_Email_Error_Signup: 'LOGIN_ZOD_Signup_unkown',
	LOGIN_ZOD_Email_Error_SignupKey: 'Falsche E-Mail oder falsches Passwort',
	LOGIN_ZOD_Token_Error: 'Token ist falsch!',
	LOGIN_ZOD_Token_Expired: 'Token ist abgelaufen!',
	LOGIN_ZOD_Forgotten_Error: 'Kein Konto unter dieser E-Mail-Adresse',
	LOGIN_ZOD_Forgotten_email:
		'Hallo,<br><br>Wir haben eine Anfrage erhalten, Ihr Passwort zurückzusetzen. Ihr Passwort-Reset-Token lautet:<br><br>{token:string}<br><br>Bitte folgen Sie dem untenstehenden Link, um Ihr Passwort zurückzusetzen:<br>{link:string}<br><br>Falls Sie diese Rücksetzung nicht angefordert haben, ignorieren Sie bitte diese Nachricht.<br><br>Mit freundlichen Grüßen,<br>Ihr Support Team',

	// Entry List
	ENTRYLIST_Untranslated: 'Keine Daten',
	ENTRYLIST_Create: 'Erstellen',
	ENTRYLIST_Publish: 'Publizieren',
	ENTRYLIST_Unpublish: 'Archivieren',
	ENTRYLIST_Schedule: 'Planen',
	ENTRYLIST_Clone: 'Kopieren',
	ENTRYLIST_Delete: 'Löschen',
	ENTRYLIST_Delete_title: 'Bitte bestätigen Sie die Löschung',
	ENTRYLIST_Delete_body: 'Sind Sie sicher, dass Sie fortfahren möchten?',
	ENTRYLIST_Delete_cancel: 'Abbrechen',
	ENTRYLIST_Delete_confirm: 'Bestätigen',
	ENTRYLIST_Search: 'Suchen',
	ENTRYLIST_Loading: 'Laden ...',
	ENTRYLIST_Modal_title_Create: 'Bitte bestätigen Sie die Erstellung des Inhalts',
	ENTRYLIST_Modal_body_Create: 'Sind Sie sicher, dass Sie diesen Inhalt erstellen möchten?',
	ENTRYLIST_Modal_title_Publish: 'Bitte bestätigen Sie die Veröffentlichung des Inhalts',
	ENTRYLIST_Modal_body_Publish: 'Sind Sie sicher, dass Sie diesen Inhalt veröffentlichen möchten?',
	ENTRYLIST_Modal_title_Unpublish: 'Bitte bestätigen Sie, dass der Inhalt nicht veröffentlicht werden soll',
	ENTRYLIST_Modal_body_Unpublish: 'Sind Sie sicher, dass Sie diesen Inhalt nicht veröffentlichen möchten?',
	ENTRYLIST_Modal_title_Schedule: 'Bitte bestätigen Sie den Zeitplan für den Inhalt',
	ENTRYLIST_Modal_body_Schedule: 'Sind Sie sicher, dass Sie diesen Inhalt einplanen möchten?',
	ENTRYLIST_Modal_title_Clone: 'Bitte bestätigen Sie das Klonen von Inhalten',
	ENTRYLIST_Modal_body_Clone: 'Sind Sie sicher, dass Sie diesen Inhalt klonen möchten?',
	ENTRYLIST_Modal_title_Delete: 'Bitte bestätigen Sie das Löschen des Inhalts',
	ENTRYLIST_Modal_body_Delete: 'Sind Sie sicher, dass Sie diesen Inhalt löschen möchten?',
	ENTRYLIST_Modal_Cancel: 'Abbrechen',

	// Fields

	// Form
	FORM_Create: 'Erstellen',
	FORM_CloseMenu: 'Menü schließen',
	FORM_TT_Closes: 'Schließen ohne Speichern',
	FORM_Required: 'Erforderlich',
	// Alert

	// E-Mail
	EMAIL_Welcome_Title: 'Willkommen bei {PUBLIC_SITENAME}',
	EMAIL_Welcome_Meta: 'Herzlich willkommen bei {PUBLIC_SITENAME}',
	EMAIL_Welcome_Preview: 'Willkommen bei {PUBLIC_SITENAME}',
	EMAIL_Welcome_Username: 'Lieber {username},',
	EMAIL_Willkommen_Seitenname: 'Willkommen bei {PUBLIC_SITENAME} - einem flexiblen Headless CMS mit Sveltekit.',
	EMAIL_Willkommen_SimpleCMS:
		'SimpleCMS ist ein schnelles und flexibles Headless CMS, mit dem Sie Ihre Inhalte einfach verwalten können. Mit Sveltekit, das unsere Plattform betreibt, können Sie eine nahtlose und effiziente Erfahrung erwarten.',
	EMAIL_Welcome_Discussion1: 'Wenn Sie Fragen haben oder Hilfe bei den ersten Schritten benötigen, besuchen Sie bitte unsere Q&A auf Github',
	EMAIL_Welcome_Discussion2: 'SimpleCMS Diskussion.',
	EMAIL_Welcome_Thanks: 'Vielen Dank, dass Sie sich für SimpleCMS entschieden haben. Wir freuen uns, Sie an Bord zu haben!',
	EMAIL_Welcome_Button: 'Gehe zu {PUBLIC_SITENAME}',
	EMAIL_Welcome_Footer: 'Ihr {PUBLIC_SITENAME} Team',

	EMAIL_Forgotten_Title: 'Setzen Sie Ihr Passwort für {PUBLIC_SITENAME} zurück',
	EMAIL_Forgotten_Meta: 'Setzen Sie Ihr Passwort für {PUBLIC_SITENAME} zurück',
	EMAIL_Forgotten_Preview: 'Setzen Sie Ihr Passwort für {PUBLIC_SITENAME} zurück',
	EMAIL_Forgotten_Hello: 'Hallo {email}',
	EMAIL_Forgotten_Request: 'Sie haben beantragt, Ihr Passwort zurückzusetzen, um Zugang zu {PUBLIC_SITENAME} zu erhalten',
	EMAIL_Forgotten_Token: 'Ihr Zurücksetzungs-Token:',
	EMAIL_Forgotten_Valid: 'Ist nur gültig für:',
	EMAIL_Forgotten_Ignore: 'Wenn Sie diese Rücksetzung nicht angefordert haben, ignorieren Sie bitte diese E-Mail.',
	EMAIL_Forgotten_Press: 'Bitte drücken Sie die Taste, um Ihr Passwort zurückzusetzen, falls Sie dies noch nicht getan haben.',
	EMAIL_Forgotten_Button: 'Passwort zurücksetzen',
	EMAIL_Forgotten_Team: 'Ihr {PUBLIC_SITENAME} Team',

	EMAIL_UpdatePW_Title: 'Ihr Passwort für {PUBLIC_SITENAME} wurde geändert',
	EMAIL_UpdatePW_Meta: 'Ihr Passwort für {PUBLIC_SITENAME} wurde geändert',
	EMAIL_UpdatePW_Preview: 'Ihr Passwort für {PUBLIC_SITENAME} wurde geändert',
	EMAIL_UpdatePW_Hello: 'Hallo {username},',
	EMAIL_UpdatePW_Success: 'Sie haben Ihr Passwort für {PUBLIC_SITENAME} erfolgreich geändert',
	EMAIL_UpdatePW_Contact: 'Wenn Sie diese Änderung nicht beantragt haben, wenden Sie sich bitte an Ihren Site-Administrator.',
	EMAIL_UpdatePW_Team: 'Ihr {PUBLIC_SITENAME} Team',

	EMAIL_UserToken_Title: 'Benutzerregistrierungs-Token für {PUBLIC_SITENAME}',
	EMAIL_UserToken_Meta: 'Benutzerregistrierungs-Token für {PUBLIC_SITENAME}',
	EMAIL_UserToken_Preview: 'Benutzerregistrierungs-Token für {PUBLIC_SITENAME}',
	EMAIL_UserToken_Access: 'Sie haben ein Zugriffstoken erhalten, um einen neuen Benutzer für {PUBLIC_SITENAME} zu erstellen',
	EMAIL_UserToken_Email: 'E-Mail:',
	EMAIL_UserToken_Token: 'Zugriffstoken:',
	EMAIL_UserToken_Role: 'Zugewiesene Rolle:',
	EMAIL_UserToken_Valid: 'Gültig nur für:',
	EMAIL_UserToken_Press: 'Bitte drücken Sie den Knopf, um Ihren Benutzer mit dieser E-Mail einzurichten',
	EMAIL_UserToken_Button: 'Benutzer erstellen',
	EMAIL_UserToken_Team: 'Ihr {PUBLIC_SITENAME} Team',

	// Collections
	COLLECTION_TEST_User: 'Benutzer',
	COLLECTION_TEST_Prefix: 'Präfix',
	COLLECTION_TEST_Prefix_data: ['Herr.', 'Frau.', 'Fraulein', 'Dr.'],
	COLLECTION_TEST_Prefix_placeholder: 'Präfix eingeben',
	COLLECTION_TEST_First: 'Vornamen',
	COLLECTION_TEST_First_placeholder: 'Vornamen eingeben',
	COLLECTION_TEST_Middle: 'Mittel',
	COLLECTION_TEST_Middle_placeholder: 'Mittel (Schreibgeschützt)',
	COLLECTION_TEST_Last: 'Nachname',
	COLLECTION_TEST_Last_placeholder: 'Nachname eingeben',

	COLLECTION_TEST_Full_Text_Option: 'Volltextoption',
	COLLECTION_TEST_Full_Text_Option_Placeholder: 'Volltext eingeben',

	// Widgets
	WIDGET_MegaMenu_title: 'Bitte einen Menünamen eingeben, bevor Sie Menükategorien hinzufügen.',
	WIDGET_MegaMenu_Next: 'Weiter',

	WIDGET_Address_SearchMap: 'Suche in Karte ...',
	WIDGET_Address_GetAddress: 'Hole von Adresse',
	WIDGET_Address_GetMap: 'Adresse Abrufen',
	WIDGET_Address_Geocoordinates: 'Geokoordinaten',
	WIDGET_Address_Latitude: 'Breitengrad',
	WIDGET_Address_Longitude: 'Längengrad',
	WIDGET_Address_Name: 'Name',
	WIDGET_Address_Street: 'Straße',
	WIDGET_Address_Zip: 'Postleitzahl',
	WIDGET_Address_City: 'Ort',
	WIDGET_Address_SearchCountry: 'Land suchen ...',

	WIDGET_Relation_ChoseExisting: 'Vorhandene auswählen...',
	WIDGET_Relation_Edit: 'Bearbeiten',
	WIDGET_Relation_AddNew: 'Neu hinzufügen',

	WIDGET_Seo_Suggestion_TitlePerfect: 'Ihr Titel hat mehr als 50 Zeichen. Perfekt!',
	WIDGET_Seo_Suggestion_TitleGood: 'Ihr Titel besteht aus mehr als 30 Zeichen. Versuchen Sie 50+. Gut!',
	WIDGET_Seo_Suggestion_TitleBad: 'Ihr Titel ist zu kurz. Stellen Sie sicher, dass Ihr Titel mindestens 50 Zeichen lang ist. Schlecht!',
	WIDGET_Seo_Suggestion_DescriptionPerfect: 'Ihre Beschreibung hat zwischen 120 und 165 Zeichen. Perfekt!',
	WIDGET_Seo_Suggestion_DescriptionGood: 'Ihre Beschreibung besteht aus mehr als 90 Zeichen. Gut!',
	WIDGET_Seo_Suggestion_DescriptionBad: 'Ihre Beschreibung hat weniger als 90 Zeichen. Schlecht!',
	WIDGET_Seo_Suggestion_SentencePerfect: 'Ihre Beschreibung ist zwischen 2 und 4 Sätzen lang. Perfekt!',
	WIDGET_Seo_Suggestion_SentenceGood: 'Ihre Beschreibung ist 2 bis 4 Sätze lang, aber nicht alle Sätze sind zwischen 10 und 30 Zeichen lang. Gut!',
	WIDGET_Seo_Suggestion_SentenceBad: 'Ihre Beschreibung ist nur 1 Satz lang. Stellen Sie sicher, dass Ihre Beschreibung 2 bis 4 Sätze lang ist.',

	WIDGET_Seo_Suggestion_NumberPerfect: 'Ihr Titel verwendet Zahlen. Perfekt!',
	WIDGET_Seo_Suggestion_NumberBad: 'Ihr Titel verwendet keine Zahlen. Die Verwendung von Zahlen in Ihrem Titel kann Ihre CTR erhöhen.',
	WIDGET_Seo_Suggestion_PowerWordTitle: `Ihr Titel enthält das Power Word. Perfekt!`,
	WIDGET_Seo_Suggestion_PowerWordTitleBad: `Ihr Titel enthält kein Power Word. Schlecht!`,
	WIDGET_Seo_Suggestion_PowerWordDescription: `Ihre Beschreibung verwendet das Power Word. Perfekt!`,
	WIDGET_Seo_Suggestion_PowerWordDescriptionBad: `Ihre Beschreibung verwendet kein Power Word. Schlecht`,
	WIDGET_Seo_Suggestion_ctaKeywordsTitle: `Ihr Titel enthält das CTA-Schlüsselwort. Perfekt!`,
	WIDGET_Seo_Suggestion_ctaKeywordsTitleBad: `Ihr Titel enthält kein CTA-Schlüsselwort. Schlecht!`,
	WIDGET_Seo_Suggestion_ctaKeywordsDescription: `Ihre Beschreibung verwendet das CTA-Schlüsselwort. Perfekt!`,
	WIDGET_Seo_Suggestion_ctaKeywordsDescriptionBad: `Ihre Beschreibung enthält kein CTA-Schlüsselwort. Schlecht!`,
	WIDGET_Seo_Suggestion_Title: 'Titel:',
	WIDGET_Seo_Suggestion_Character: 'Zeichen:',
	WIDGET_Seo_Suggestion_WidthDesktop: '- Desktop:',
	WIDGET_Seo_Suggestion_WidthMobile: 'Mobil: ',
	WIDGET_Seo_Suggestion_SeoTitle: 'SEO Titel: ',
	WIDGET_Seo_Suggestion_Description: 'Beschreibung:',
	WIDGET_Seo_Suggestion_SeoDescription: 'SEO Beschreibung',
	WIDGET_Seo_Suggestion_SeoPreview: 'SEO-Vorschau',
	WIDGET_Seo_Suggestion_ListOfSuggestion: 'SEO Vorschläge:',
	WIDGET_Seo_Suggestion_Text: 'Titel und Beschreibung für Google-Suchergebnisse optimieren',
	WIDGET_SEO_PowerWords: [
		'Beliebt',
		'Bestseller',
		'Bequem',
		'Bonus',
		'Beweis',
		'Bewährt',
		'Einfach',
		'Einfachheit',
		'Effektiv',
		'Effizient',
		'Empfehlung',
		'Ergebnisse',
		'Erfolg',
		'Erhöhen',
		'Exklusiv',
		'Expertenmeinung',
		'Flexibel',
		'Garantie',
		'Garantiert',
		'Geld-zurück-Garantie',
		'Geheim',
		'Geschenk',
		'Gewinnen',
		'Heiß',
		'Kein Risiko',
		'Keine Verbindlichkeiten',
		'Keine Verpflichtung',
		'Kostenlos',
		'Limitiert',
		'Lohnenswert',
		'Maximieren',
		'Minimieren',
		'Neu',
		'Nützlich',
		'Optimieren',
		'Premium',
		'Praktisch',
		'Privat',
		'Profitieren',
		'Qualität',
		'Rabatt',
		'Reduzieren',
		'Risikofrei',
		'Schützen',
		'Schnell',
		'Sicher',
		'Sicherheit',
		'Sofort',
		'Sonderangebot',
		'Sparen',
		'Steigern',
		'Stressfrei',
		'Überraschung',
		'Unkompliziert',
		'Vertrauen',
		'Wertvoll',
		'Zeit sparen',
		'Zufriedenheit'
	],

	WIDGET_SEO_ctaKeywords: [
		'Anmelden',
		'Anrufen',
		'Bestellen',
		'Entdecken',
		'Finden',
		'Herunterladen',
		'Jetzt',
		'Kaufen',
		'Klicken',
		'Kontaktieren',
		'Lernen',
		'Registrieren',
		'Sehen',
		'Teilnehmen',
		'Testen',
		'Verkaufen',
		'Versuchen',
		'Vorschau',
		'Zugreifen'
	]
};

export default de;
