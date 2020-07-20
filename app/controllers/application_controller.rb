class ApplicationController < ActionController::Base
    before_action :set_locale
    helper_method :current_user, :logged_in?
    
    def current_user
        @current_user ||= User.find(session[:user_id]) if session[:user_id]
    end

    def logged_in?
        !!current_user
    end

    def require_user
        if !logged_in?
            flash[:error] = I18n.t "login.error"
            redirect_to login_path
        end
    end

    def set_locale
        session[:locale] = params[:locale] if params[:locale].present?
        I18n.locale = session[:locale] || I18n.default_locale
    end
end
