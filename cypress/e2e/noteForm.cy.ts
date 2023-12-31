import noteForm from "../pageObjects/noteForm"

const baseUrl = "http://localhost:3000";

describe('FORM Test', () => {

  beforeEach(() => {
    cy.visit(baseUrl);
  })

  it("Expected to be added a new note", () => {
    const noteObj = new noteForm();
    noteObj.createNote("Title1", "Content1", "blue");
    noteObj.checkTitleAndContentText("Title1", "Content1");
  });

  it("Expected to be seen error text as saving missing title and content input", () => {
    const noteObj = new noteForm();
    noteObj.clickAddNoteBtn();
    noteObj.enterTitle(" ");
    noteObj.enterContent("     ");
    noteObj.clickSaveBtn();
    noteObj.shouldExistErrorTextAndContainMessage("You must write title and content!");
  });

  it("Expected to be updated a note", () => {
    const noteObj = new noteForm(); 
    noteObj.createNote("Title1", "Content1", "red"); // create note
    noteObj.clickUpdateBtn(); // update that note
    noteObj.enterTitle(" Updated");
    noteObj.enterContent(" Updated"); 
    noteObj.clickSaveBtn();
    noteObj.checkTitleAndContentText("Title1 Updated", "Content1 Updated");
  });

  it("Expected to be deleted a note", () => {
    const noteObj = new noteForm(); 
    noteObj.createNote("Title1", "Content1", "red"); // create note
    noteObj.clickDeleteBtn();
    noteObj.shouldNotExistNoteCard(); // after delete, note card shouldn't be displayed.
  });

  
})
