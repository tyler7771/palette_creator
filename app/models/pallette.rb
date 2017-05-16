class Pallette < ApplicationRecord
  validates :dominate_color, presence: true

  belongs_to :user
end
