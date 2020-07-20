class SessionsController < ApplicationController
    before_action :check_logged_in, only: [:new, :create]

    def new     
    end

    def create
        user = User.find_by(username: params[:session][:username])
        if user && user.authenticate(params[:session][:password])
            session[:user_id] = user.id
            flash.now[:success] = I18n.t 'login.create.success'
            redirect_to root_path
        else
            flash.now[:error] = I18n.t 'login.create.error'
            render 'new'
        end
    end

    def destroy
        session[:user_id] = nil
        flash.now[:success] = I18n.t 'login.destroy.success'
        redirect_to login_path
    end

    private

    def check_logged_in
        if logged_in?
            redirect_to root_path
        end
    end

end