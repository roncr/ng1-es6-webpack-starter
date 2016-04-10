import HomeModule from './home';
import HomeController from './home.controller';

describe('HomeComponent', () => {
    let $rootScope, makeController;

    beforeEach(window.module(HomeModule.name));
    beforeEach(inject((_$rootScope_) => {
        $rootScope = _$rootScope_;
        makeController = () => {
            return new HomeController();
        };
    }));

    describe('Controller', () => {
        // controller specs
        it('has a name property', () => { // erase if removing this.name from the controller
            let controller = makeController();
            expect(controller.name).not.toBeUndefined();;
        });
    });
    
});