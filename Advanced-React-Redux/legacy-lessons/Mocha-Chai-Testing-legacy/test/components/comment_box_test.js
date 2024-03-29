import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
  let component;

  // Runs the anonymous function before each 'it' block is ran
  beforeEach(() => {
    // Create a new instance of component for each assertionit
    component = renderComponent(CommentBox);
  });

  it('has the correct class', () => {
    expect(component).to.have.class('comment-box');
  });

  it('has a text area', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('entering some text', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', 'new comment');
    });

    it('shows text that is entered in the textarea', () => {
      expect(component.find('textarea')).to.have.value('new comment');
    });
  
    it('clears the input when submitted', () => {
      component.simulate('submit');
      
      expect(component.find('textarea')).to.have.value('');
    });
  });
});