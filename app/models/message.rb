class Message < ApplicationRecord
    belongs_to :user
    validates :body, presence: true

    scope :custom_display, -> { last(20) }
end
