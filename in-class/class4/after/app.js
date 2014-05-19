;(function() {
  var questionaireInput = document.querySelector('.questionaire').getElementsByTagName('input')[0];
  var todoInput = document.querySelector('.todo-input');

  var handleQuestionaireKeyup = function(e) {
    e.preventDefault();
    var text = e.target.value;
    if (e.keyCode === 13 && text.length > 0) {
      questionaireContainer = document.querySelector('.questionaire')
      todoContainer = document.querySelector('.todo')
      questionaireContainer.className += ' hidden';
      todoContainer.className = 'todo';
      document.querySelector('.todo-title').innerHTML = text;
    }
  };

  var handleCheckboxDone = function(e) {
    if (e.target.checked) {
      e.target.parentNode.className = 'is-done';
    } else {
      e.target.parentNode.className = '';
    }
  };

  var handleTodoKeyup = function(e) {
    e.preventDefault();
    var text = e.target.value
    if (e.keyCode === 13 && text.length > 0) {
      var todoListItem = document.createElement('li'),
          todoListItemDone = document.createElement('input'),
          todoList = document.querySelector('.todo-list');

      todoListItemDone.type = 'checkbox';
      todoListItemDone.addEventListener('change', handleCheckboxDone);

      todoListItem.innerHTML += text;
      todoList.appendChild(todoListItem);

      todoListItem.insertBefore(todoListItemDone, todoListItem.firstChild);

      e.target.value = '';
    }
  };

  questionaireInput.addEventListener('keyup', handleQuestionaireKeyup)
  todoInput.addEventListener('keyup', handleTodoKeyup)
})();
