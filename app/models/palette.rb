class Palette < ApplicationRecord
  validates :main_color, presence: true

  belongs_to :user
end
