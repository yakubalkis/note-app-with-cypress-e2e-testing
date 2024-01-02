
class noteForm {

    elements = {
        addNoteBtn: () => cy.get('[data-test-form="add-note-btn"]'),
        titleInput: () => cy.get('[data-test-form="title-input"]'),
        contentInput: () => cy.get('[data-test-form="content-input"]'),
        radioBtn: (color) => cy.get('[data-test-form="radio-btn"]').children(`.${color}`),
        saveBtn: () => cy.get('[data-test-form="submit-btn"]'),
    }

    clickAddNoteBtn() {
        this.elements.addNoteBtn().click();
    }

    enterTitle(title) {
        this.elements.titleInput().type(title);
    }

    enterContent(content) {
        this.elements.contentInput().type(content);
    }

    clickRadioBtn(color) {
        this.elements.radioBtn(color).click();
    }

    clickSaveBtn() {
        this.elements.saveBtn().click();
    }    

}

export default noteForm;