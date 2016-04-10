import AboutModule from './about';
import AboutController from './about.controller';

describe('AboutComponent', () => {
    let $rootScope, makeController;

    beforeEach(window.module(AboutModule.name));
    beforeEach(inject((_$rootScope_) => {
        $rootScope = _$rootScope_;
        makeController = () => {
            return new AboutController();
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