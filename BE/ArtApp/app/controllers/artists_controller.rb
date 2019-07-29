class ArtistsController < ApplicationController

    def index
        @artsts = Artist.all
    end
end
