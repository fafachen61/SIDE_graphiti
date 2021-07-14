#if Rails.env === 'production' 
#    Rails.application.config.session_store :cookie_store, key: '_graffiti', domain: '_graffiti-json-api'
#else
#    Rails.application.config.session_store :cookie_store, key: '_graffiti'
