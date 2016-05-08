import <%= upCaseName %>Module from './<%= name %>'
import <%= upCaseName %>Controller from './<%= name %>.controller';
import <%= upCaseName %>Component from './<%= name %>.component';
import <%= upCaseName %>Template from './<%= name %>.html';

describe('<%= upCaseName %>', () => {
    let $rootScope, makeController;

    beforeEach(window.module(<%= upCaseName %>Module.name));
    beforeEach(inject((_$rootScope_) => {
        $rootScope = _$rootScope_;
        makeController = () => {
            return new <%= upCaseName %>Controller();
        };
    }));

    describe('Module', () => {
        // top-level specs: i.e., routes, injection, naming
    });

    describe('Controller', () => {
        // controller specs
        it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
            let controller = makeController();
            expect(controller.name).not.toBeUndefined();
        });
    });

    describe('Template', () => {
        // template specs
        // tip: use regex to ensure correct bindings are used e.g., {{  }}
        it('has name in template [REMOVE]', () => {
            expect(<%= upCaseName %>Template).toMatch(/{{\s?vm\.name\s?}}/g);
        });
    });

    describe('Component', () => {
        // component/directive specs
        let component = <%= upCaseName %>Component;

        it('includes the intended template',() => {
            expect(component.template).toEqual(<%= upCaseName %>Template);
        });

        it('uses `controllerAs` syntax', () => {
            expect(component.controllerAs).not.toBeUndefined();
        });

        it('invokes the right controller', () => {
            expect(component.controller).toEqual(<%= upCaseName %>Controller);
        });
    });
});