class Image < ApplicationRecord
    validates :uploader_name, presence: true
    #validates :discription, presence: true
    #validates :creator_name, presence: true
    validates :image, presence: true
    #validates :category, presence: true
    validates :access_level, presence: true
end
