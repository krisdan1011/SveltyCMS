import type { Translation } from '../i18n-types';

const es: Translation = {
	// SideBar left
	SBL_Search: 'Buscar ...',
	SBL_Admin: 'Admin',
	SBL_Admin_User: 'Usuario Admin',
	SBL_SystemLanguage: 'Idioma del sistema',
	SBL_User: 'Perfil de usuario',
	SBL_isDark: 'Cambiar a',
	SBL_Light: 'Claro',
	SBL_Dark: 'Dunkel',
	SBL_Mode: 'Oscuro',
	SBL_Version: 'Ver.',
	SBL_Ver: 'Ver.',
	SBL_Save: 'Guardar',
	SBL_Save_message: 'Datos guardados con éxito',
	SBL_SignOut: 'Cerrar sesión',

	// Collections
	CollectionCategory_Collection: 'Recopilación',
	CollectionCategory_Menu: 'Menú',
	CollectionCategory_Media: 'Media',

	// SideBar Right

	// Error
	ERROR_Pagenotfound: 'Página no encontrada',
	ERROR_Wrong: 'Lo sentimos, algo ha ido mal',
	ERROR_GoHome: 'A la página de inicio',

	//LOADING
	LOADING_Wait: 'Por favor, espere',
	LOADING_Loading: 'Se está cargando...',

	// USER
	USER_Setting: 'configuración del usuario',
	USER_ID: 'ID de usuario',
	USER_Username: 'Nombre de usuario',
	USER_FirstName: 'Nombre',
	USER_LastName: 'Apellido',
	USER_Email: 'Email',
	USER_Password: 'Contraseña',
	USER_NewPassword: 'Nueva contraseña:',
	USER_Edit: 'Editar usuario',
	USER_Fail: 'Email ya en uso',
	USER_Delete: 'Eliminar',
	USER_Cancel: 'Cancelar',
	USER_Save: 'Guardar',
	USER_Profile: 'Perfil de usuario',
	USER_Edit_Avatar: 'Editar Avatar',
	USER_Role: 'Rol',
	USER_Generate: 'Email token de registro',
	USER_ListShow: 'Mostrar lista de usuarios',
	USER_ListCollapse: 'Cerrar lista de usuarios',
	USER_EmailToken: 'Enviar email de registro de usuario',
	USER_ListToken: 'Lista de tokens:',
	USER_ListUser: 'Lista de usuarios:',
	USER_AdminArea: 'Área de administración:',
	USER_Edit_Title: 'Editar datos de usuario:',
	USER_Edit_Body: 'Modifica tus datos y luego pulsa Guardar',
	USER_Avatar_Title: 'Edita tu Avatar:',
	USER_Avatar_Body: 'Sube una nueva imagen de avatar y presiona Guardar',
	USER_FileSize: 'El tamaño del archivo debe ser inferior a 5MB',
	USER_FilesAllowed: 'PNG, JPEG, GIF, SVG, WEBP, AVIF permitidos',
	USER_Avatar_Unsupported: 'Formatos soportados: jpeg, jpg, png, webp, avi , svg, gif',
	USER_Confirm_Title: 'Por favor, confirme la eliminación del usuario:',
	USER_Confirm_Body: 'Esto no se puede deshacer. ¿Está seguro de que desea continuar?',
	USER_Confirm_Delete: 'Eliminar usuario',

	// Tanstack
	TANSTACK_UserList: 'Lista de usuarios:',
	TANSTACK_Column: 'Columnas',
	TANSTACK_Toggle: 'Todo',
	TANSTACK_Filter: 'Filtro de facetas',
	TANSTACK_Export: 'Exportación XML',
	TANSTACK_Page: 'Página',
	TANSTACK_of: 'De',
	TANSTACK_Total: 'Total',
	TANSTACK_Row: 'Fila',
	TANSTACK_Rows: 'filas',

	// Login
	LOGIN_SignIn: 'Iniciar sesión',
	LOGIN_SignUp: 'Registrarse',
	LOGIN_Required: '* Requerido',
	LOGIN_Username: 'Nombre de usuario',
	LOGIN_EmailAddress: 'Dirección de correo electrónico',
	LOGIN_Password: 'Contraseña',
	LOGIN_Token: 'Identificador de inicio de sesión',
	LOGIN_ConfirmPassword: 'Confirmar contraseña',
	LOGIN_ForgottenPassword: 'Contraseña olvidada',
	LOGIN_ForgottenPassword_text: 'No te preocupes. Le ayudaremos a recuperar su contraseña.',
	LOGIN_SendResetMail: 'Enviar contraseña por correo electrónico',
	LOGIN_ResetPassword: 'Restablecer contraseña',
	LOGIN_ResetPasswordSave: 'Guardar nueva contraseña',
	LOGIN_SignInSuccess: 'Iniciar sesión con éxito',

	LOGIN_ZOD_Username_string: 'El nombre de usuario es obligatorio',
	LOGIN_ZOD_Username_regex: 'El nombre debe contener sólo letras, dígitos y @$!%*#',
	LOGIN_ZOD_Username_min: 'El nombre debe tener al menos 2 caracteres',
	LOGIN_ZOD_Username_max: 'El nombre debe tener sólo 24 caracteres',
	LOGIN_ZOD_Email_string: 'El correo electrónico es obligatorio',
	LOGIN_ZOD_Email_email: 'El correo electrónico debe ser un correo electrónico válido',
	LOGIN_ZOD_Password_string: 'Se requiere contraseña',
	LOGIN_ZOD_Password_regex: 'La contraseña debe tener al menos 8 caracteres y contener al menos una letra, un número y un carácter especial',
	LOGIN_ZOD_Confirm_password_string: 'Se requiere confirmación de contraseña',
	LOGIN_ZOD_Confirm_password_regex: 'La contraseña debe tener al menos 8 caracteres y contener al menos una letra, un número y un carácter especial',
	LOGIN_ZOD_Token_string: 'Se requiere Auth Token',
	LOGIN_ZOD_Password_match: 'La contraseña y la confirmación deben coincidir',

	LOGIN_ZOD_General_Unnown: 'Se ha producido un error desconocido',
	LOGIN_ZOD_General_Error: 'Entrada no válida',
	LOGIN_ZOD_Email_Error_inUse: 'Correo electrónico ya utilizado',
	LOGIN_ZOD_Email_Error_send: 'Error al enviar un e-mail',
	LOGIN_ZOD_Email_Error_Signup: 'LOGIN_ZOD_Signup_unkown',
	LOGIN_ZOD_Email_Error_SignupKey: 'Correo electrónico o contraseña incorrectos',
	LOGIN_ZOD_Token_Error: 'Token incorrecto!',
	LOGIN_ZOD_Token_Expired: 'Token expirado!',
	LOGIN_ZOD_Forgotten_Error: 'No hay cuenta en esta dirección de correo electrónico',
	LOGIN_ZOD_Forgotten_email:
		'Hola,<br><br>Hemos recibido una solicitud para restablecer su contraseña. El token de restablecimiento de contraseña es:<br><br>{token:string}<br><br>Por favor, sigue el siguiente enlace para restablecer tu contraseña:<br>{link:string}<br><br>Si no has solicitado este restablecimiento, por favor, ignora este mensaje.<br><br>Atentamente,<br>Su equipo de soporte',

	// Entry List
	ENTRYLIST_Untranslated: 'Sin datos',
	ENTRYLIST_Create: 'Crear',
	ENTRYLIST_Publish: 'Publicar',
	ENTRYLIST_Unpublish: 'Archivar',
	ENTRYLIST_Schedule: 'Programar',
	ENTRYLIST_Clone: 'Copiar',
	ENTRYLIST_Delete: 'Borrar',
	ENTRYLIST_Delete_title: 'Confirmar borrado',
	ENTRYLIST_Delete_body: '¿Seguro que desea continuar?',
	ENTRYLIST_Delete_cancel: 'Cancelar',
	ENTRYLIST_Delete_confirm: 'Confirmar',
	ENTRYLIST_Search: 'Buscar',
	ENTRYLIST_Loading: 'Cargando ...',
	ENTRYLIST_Modal_title_Create: 'Por favor, confirme la creación del contenido',
	ENTRYLIST_Modal_body_Create: '¿Está seguro de que desea Crear este contenido?',
	ENTRYLIST_Modal_title_Publish: 'Por favor, confirme la publicación del contenido',
	ENTRYLIST_Modal_body_Publish: '¿Estás seguro de que deseas Publicar este contenido?',
	ENTRYLIST_Modal_title_Unpublish: 'Por favor, confirme la anulación de la publicación del contenido',
	ENTRYLIST_Modal_body_Unpublish: '¿Estás seguro de que deseas Despublicar este contenido?',
	ENTRYLIST_Modal_title_Schedule: 'Por favor, confirme el horario del contenido',
	ENTRYLIST_Modal_body_Schedule: '¿Está seguro de que desea Programar este contenido?',
	ENTRYLIST_Modal_title_Clone: 'Por favor, confirme la clonación del contenido',
	ENTRYLIST_Modal_body_Clone: '¿Estás seguro de que deseas Clonar este contenido?',
	ENTRYLIST_Modal_title_Delete: 'Por favor, confirme la eliminación del contenido',
	ENTRYLIST_Modal_body_Delete: '¿Estás seguro de que deseas Eliminar este contenido?',
	ENTRYLIST_Modal_Cancel: 'Cancelar',

	// Fields

	// Form
	FORM_Create: 'Crear',
	FORM_CloseMenu: 'Cerrar menú',
	FORM_TT_Closes: 'Cerrar sin guardar',
	FORM_Required: 'Erforderlich',

	// Alert

	// EMAIL
	EMAIL_Welcome_Title: 'Bienvenido a {PUBLIC_SITENAME}',
	EMAIL_Welcome_Meta: 'Bienvenido a {PUBLIC_SITENAME}',
	EMAIL_Welcome_Preview: 'Bienvenido a {PUBLIC_SITENAME}',
	EMAIL_Welcome_Username: 'Estimado {username},',
	EMAIL_Welcome_Siteame: 'Bienvenido a {PUBLIC_SITENAME} - un CMS Headless flexible impulsado por Sveltekit',
	EMAIL_Welcome_SimpleCMS:
		'SimpleCMS es un CMS rápido y flexible que le permite gestionar fácilmente su contenido. Con Sveltekit potenciando nuestra plataforma, puedes esperar una experiencia fluida y eficiente',
	EMAIL_Welcome_Discussion1: 'Si tiene alguna pregunta o necesita ayuda para empezar, por favor visite nuestro Q&A en Github',
	EMAIL_Welcome_Discussion2: 'Discusión sobre SimpleCMS',
	EMAIL_Welcome_Thanks: 'Gracias por elegir SimpleCMS. Estamos encantados de tenerte a bordo!',
	EMAIL_Welcome_Button: 'Ir a {PUBLIC_SITENAME}',
	EMAIL_Welcome_Footer: 'Tu {PUBLIC_SITENAME} Equipo',

	// Collections
	COLLECTION_TEST_User: 'Usuario',
	COLLECTION_TEST_Prefix: 'Prefijo',
	COLLECTION_TEST_Prefix_data: ['Sr.', 'Sra.', 'Srta.', 'Dr.'],
	COLLECTION_TEST_Prefix_placeholder: 'Introducir prefijo',
	COLLECTION_TEST_First: 'Nombre',
	COLLECTION_TEST_First_placeholder: 'Introduzca los nombres',
	COLLECTION_TEST_Middle: 'Segundo nombre',
	COLLECTION_TEST_Middle_placeholder: 'Medio (Sólo lectura)',
	COLLECTION_TEST_Last: 'Apellidos',
	COLLECTION_TEST_Last_placeholder: 'Introduzca el apellido',

	COLLECTION_TEST_Full_Text_Option: 'Opción de texto completo',
	COLLECTION_TEST_Full_Text_Option_Placeholder: 'Introducir texto completo',

	// Widgets
	WIDGET_MegaMenu_title: 'Introduzca un nombre para su menú antes de añadir Categorías de menú.',
	WIDGET_MegaMenu_Next: 'Siguiente',

	WIDGET_Address_SearchMap: 'Buscar en mapa ...',
	WIDGET_Address_GetAddress: 'Obtener de la dirección',
	WIDGET_Address_GetMap: 'Obtener dirección',
	WIDGET_Address_Geocoordinates: 'Geocoordenadas',
	WIDGET_Address_Latitude: 'Latitud',
	WIDGET_Address_Longitude: 'Longitud',
	WIDGET_Address_Name: 'Nombre',
	WIDGET_Address_Street: 'Calle',
	WIDGET_Address_Zip: 'Código postal',
	WIDGET_Address_City: 'Ciudad',
	WIDGET_Address_SearchCountry: 'Buscar país ...',

	WIDGET_Relation_ChoseExisting: 'Seleccionar existente...',
	WIDGET_Relation_Edit: 'Editar',
	WIDGET_Relation_AddNew: 'Añadir nueva',

	WIDGET_Seo_Suggestion_TitlePerfect: 'Tu título tiene más de 50 caracteres. ¡Perfecto!',
	WIDGET_Seo_Suggestion_TitleGood: 'Tu título tiene más de 30 caracteres. Prueba con más de 50. ¡Bien!',
	WIDGET_Seo_Suggestion_TitleBad: 'Tu título es demasiado corto. Asegúrate de que tu título tiene al menos 50 caracteres. ¡Malo!',
	WIDGET_Seo_Suggestion_DescriptionPerfect: 'Tu descripción tiene entre 120 y 165 caracteres. ¡Perfecto!',
	WIDGET_Seo_Suggestion_DescriptionGood: 'Tu descripción tiene más de 90 caracteres. ¡Bien!',
	WIDGET_Seo_Suggestion_DescriptionBad: 'Tu descripción tiene menos de 90 caracteres. ¡Malo!',
	WIDGET_Seo_Suggestion_SentencePerfect: 'Tu descripción tiene entre 2 y 4 frases. ¡Perfecto!',
	WIDGET_Seo_Suggestion_SentenceGood: 'Tu descripción tiene entre 2 y 4 frases, pero no todas las frases tienen entre 10 y 30 caracteres. Bien!',
	WIDGET_Seo_Suggestion_SentenceBad: 'Tu descripción sólo tiene 1 frase. Asegúrate de que tu descripción tenga entre 2 y 4 frases.',

	WIDGET_Seo_Suggestion_NumberPerfect: 'Tu título utiliza números. ¡Perfecto!',
	WIDGET_Seo_Suggestion_NumberBad: 'Tu título no usa números. Usar números en tu título puede aumentar tu CTR.',
	WIDGET_Seo_Suggestion_PowerWordTitle: 'Tu título tiene la palabra clave. ¡Perfecto!',
	WIDGET_Seo_Suggestion_PowerWordTitleBad: 'Tu título no tiene la palabra clave. Malo!',
	WIDGET_Seo_Suggestion_PowerWordDescription: 'Tu descripción utiliza la palabra clave. ¡Perfecto!',
	WIDGET_Seo_Suggestion_PowerWordDescriptionBad: 'Tu descripción no utiliza una Power Word. Bad',
	WIDGET_Seo_Suggestion_ctaKeywordsTitle: 'Tu título tiene la palabra clave CTA. Perfecto',
	WIDGET_Seo_Suggestion_ctaKeywordsTitleBad: 'Tu título no tiene la palabra clave CTA. Malo!',
	WIDGET_Seo_Suggestion_ctaKeywordsDescription: 'Tu descripción utiliza la palabra clave CTA. Perfecto!',
	WIDGET_Seo_Suggestion_ctaKeywordsDescriptionBad: 'Tu descripción no utiliza la palabra clave CTA. ¡Malo!',
	WIDGET_Seo_Suggestion_Title: 'Título:',
	WIDGET_Seo_Suggestion_Character: 'Carácter:',
	WIDGET_Seo_Suggestion_WidthDesktop: '- Escritorio:',
	WIDGET_Seo_Suggestion_WidthMobile: 'Móvil: ',
	WIDGET_Seo_Suggestion_SeoTitle: 'Título SEO: ',
	WIDGET_Seo_Suggestion_Description: 'Descripción:',
	WIDGET_Seo_Suggestion_SeoDescription: 'Descripción SEO',
	WIDGET_Seo_Suggestion_SeoPreview: 'Vista previa SEO',
	WIDGET_Seo_Suggestion_ListOfSuggestion: 'Sugerencias SEO:',
	WIDGET_Seo_Suggestion_Text: 'Optimizar el título y la descripción para los resultados de búsqueda de Google',

	WIDGET_SEO_PowerWords: [
		'Ahorro de tiempo',
		'Aumentar',
		'Bono',
		'Calidad',
		'Caliente',
		'Cómodo',
		'Confianza',
		'Descuento',
		'Disminuir',
		'Efectivo',
		'Eficiente',
		'Elevar',
		'Exclusivo',
		'Fácil',
		'Flexible',
		'Garantía',
		'Garantía de devolución de dinero',
		'Garantizado',
		'Ganar',
		'Gratis',
		'Inmediato',
		'Limitado',
		'Mejorar',
		'Más vendido',
		'Maximizar',
		'Minimizar',
		'Nuevo',
		'Oferta especial',
		'Opinión de expertos',
		'Optimizar',
		'Popular',
		'Premium',
		'Práctico',
		'Prueba',
		'Probado',
		'Proteger',
		'Rápido',
		'Recomendación',
		'Reducir',
		'Regalo',
		'Resultados',
		'Seguridad',
		'Seguro',
		'Sencillo',
		'Simplicidad',
		'Sin compromiso',
		'Sin estrés',
		'Sin obligaciones',
		'Sin riesgo',
		'Sorpresa',
		'Útil',
		'Valioso',
		'Vale la pena'
	],
	WIDGET_SEO_ctaKeywords: [
		'Actuar',
		'Aprender',
		'Comprar',
		'Contactar',
		'Descargar',
		'Descubrir',
		'Encontrar',
		'Hacer clic',
		'Inscribirse',
		'Llamar',
		'Obtener',
		'Ordenar',
		'Registrarse',
		'Solicitar',
		'Suscribirse',
		'Unirse',
		'Ver',
		'Vender',
		'Ver detalles'
	]
};

export default es;
