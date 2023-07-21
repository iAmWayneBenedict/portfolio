const env_user_id = import.meta.env.VITE_USER_ID;
const env_service_id = import.meta.env.VITE_SERVICE_ID;
const env_template_id = import.meta.env.VITE_TEMPLATE_ID;
const env_recaptcha_site_id = import.meta.env.VITE_CAPTCHA_SITE_KEY;
const env_recaptcha_secret_id = import.meta.env.VITE_CAPTCHA_SECRET_KEY;

const envConfig = {
	env_user_id,
	env_service_id,
	env_template_id,
	env_recaptcha_site_id,
	env_recaptcha_secret_id,
};

export default envConfig;
