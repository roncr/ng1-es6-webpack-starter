import NavbarModule from './navbar';
import NavbarController from './navbar.controller';

describe('NavbarComponent', () => {
    let $rootScope, makeController;

    beforeEach(window.module(NavbarModule.name));
    beforeEach(inject((_$rootScope_) => {
        $rootScope = _$rootScope_;
        makeController = () => {
            return new NavbarController();
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