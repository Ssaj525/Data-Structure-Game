const data = {
    "Array": {
      "Insert at Beginning": [
        "Check if the array is full.",
        "If the array is full, resize the array.",
        "Shift all elements one position to the right.",
        "Assign the new element to the first index.",
        "Increment the array size."
      ],
      "Insert at End": [
        "Check if the array is full.",
        "If the array is full, resize the array.",
        "Assign the new element to the last index.",
        "Increment the array size."
      ],
      "Delete at Beginning": [
        "Check if the array is empty.",
        "If the array is empty, return an error.",
        "Retrieve the first element for possible use.",
        "Shift all elements one position to the left.",
        "Decrement the array size."
      ],
      "Delete at End": [
        "Check if the array is empty.",
        "If the array is empty, return an error.",
        "Retrieve the last element for possible use.",
        "Decrement the array size."
      ]
    },
    "Stack": {
      "Push": [
        "Create a new node with the element.",
        "Set the new node's next pointer to the current top.",
        "Update the top pointer to the new node.",
        "Increment the stack size."
      ],
      "Pop": [
        "Check if the stack is empty.",
        "If the stack is empty, return an error.",
        "Retrieve the top element.",
        "Update the top pointer to the next node.",
        "Decrement the stack size."
      ]
    },
    "Queue": {
      "Enqueue": [
        "Create a new node with the element.",
        "Check if the queue is empty.",
        "If the queue is empty, set the new node as both front and rear.",
        "If the queue is not empty, set the rear's next pointer to the new node.",
        "Update the rear pointer to the new node.",
        "Increment the queue size."
      ],
      "Dequeue": [
        "Check if the queue is empty.",
        "If the queue is empty, return an error.",
        "Retrieve the front element.",
        "Update the front pointer to the next node.",
        "If the front becomes null, update the rear to null.",
        "Decrement the queue size."
      ]
    },
    "Linked List": {
      "Insert at Beginning": [
        "Create a new node with the element.",
        "Set the new node's next pointer to the current head.",
        "Update the head pointer to the new node.",
        "If the list was empty, update the tail pointer to the new node.",
        "Increment the list size."
      ],
      "Insert at End": [
        "Create a new node with the element.",
        "Check if the list is empty.",
        "If the list is empty, set the new node as both head and tail.",
        "If the list is not empty, set the current tail's next pointer to the new node.",
        "Update the tail pointer to the new node.",
        "Increment the list size."
      ],
      "Delete at Beginning": [
        "Check if the list is empty.",
        "If the list is empty, return an error.",
        "Retrieve the current head node.",
        "Update the head pointer to the next node.",
        "If the head becomes null, update the tail to null.",
        "Free the old head node.",
        "Decrement the list size."
      ],
      "Delete at End": [
        "Check if the list is empty.",
        "If the list is empty, return an error.",
        "Traverse the list to find the node before the tail.",
        "Retrieve the current tail node.",
        "Update the tail pointer to the previous node.",
        "Set the new tail's next pointer to null.",
        "Free the old tail node.",
        "Decrement the list size."
      ]
    },
    "Graph": {
      "Add Vertex": [
        "Create a new vertex/node with the given value.",
        "Initialize the adjacency list for the new vertex.",
        "Add the new vertex to the graph's vertex list.",
        "Update the graph size."
      ],
      "Add Edge": [
        "Check if both vertices exist in the graph.",
        "If either vertex does not exist, return an error.",
        "Connect the two vertices by adding each other to their adjacency lists.",
        "If the graph is undirected, repeat the connection in the opposite direction.",
        "Update the edge count."
      ],
      "Delete Vertex": [
        "Check if the vertex exists in the graph.",
        "If the vertex does not exist, return an error.",
        "Remove the vertex from the graph's vertex list.",
        "Update the adjacency lists of all other vertices to remove references to the deleted vertex.",
        "Update the graph size."
      ],
      "Delete Edge": [
        "Check if the edge exists between the two vertices.",
        "If the edge does not exist, return an error.",
        "Disconnect the vertices by removing each other from their adjacency lists.",
        "If the graph is undirected, repeat the disconnection in the opposite direction.",
        "Update the edge count."
      ]
    },
    "Tree": {
      "Insert Node": [
        "Create a new node with the element.",
        "Start at the root and compare the element with the current node's value.",
        "Traverse left if the element is less than the current node's value, or right if it is greater.",
        "Repeat step 3 until reaching a leaf node.",
        "Insert the new node as a left or right child, based on the comparison.",
        "Update the tree size."
      ],
      "Delete Node": [
        "Check if the node exists in the tree.",
        "If the node does not exist, return an error.",
        "Find the node to be deleted and its parent node.",
        "Determine the case: no children, one child, or two children.",
        "For no children, simply remove the node.",
        "For one child, connect the child to the parent of the node to be deleted.",
        "For two children, find the inorder successor (or predecessor) to replace the node.",
        "Recursively delete the inorder successor (or predecessor) node.",
        "Update the tree size."
      ],
      "Search Node": [
        "Start at the root.",
        "Compare the element with the current node's value.",
        "If the element is equal to the current node's value, return the node.",
        "Traverse left if the element is less, or right if it is greater.",
        "Repeat steps 2-4 until the element is found or reaching a leaf node."
      ],
      "Traverse": [
        "Choose a traversal method: inorder, preorder, postorder.",
        "For inorder traversal:",
        "Recursively traverse the left subtree.",
        "Visit the current node.",
        "Recursively traverse the right subtree.",
        "For preorder traversal:",
        "Visit the current node.",
        "Recursively traverse the left subtree.",
        "Recursively traverse the right subtree.",
        "For postorder traversal:",
        "Recursively traverse the left subtree.",
        "Recursively traverse the right subtree.",
        "Visit the current node."
      ]
    }
  };
  
      document.addEventListener('DOMContentLoaded', () => {
          const urlParams = new URLSearchParams(window.location.search);
          const structure = urlParams.get('structure');
          const operation = urlParams.get('operation');
  
          // Update content based on structure and operation
          if (structure && operation) {
              // Update heading with structure and operation
              const heading = document.querySelector('.options h2');
              heading.textContent = `${operation} Operation on ${structure}`;
  
              // Get the steps for the specified structure and operation from the JSON data
              const steps = data[structure]?.[operation];
              if (steps) {
                  // Update f-step elements in steps div
                  const stepsDiv = document.querySelector('.steps .steps-slider');
                  stepsDiv.innerHTML = ''; // Clear existing content
                  steps.forEach((step, index) => {
                      const fStepElement = document.createElement('div');
                      fStepElement.classList.add('f-step', 'leading-5', 'font-semibold');
                      fStepElement.textContent = `${index + 1}: ${step}`;
                      stepsDiv.appendChild(fStepElement);
                  });
  
                  const indicators = document.querySelector('.indicator');
                  indicators.innerHTML = ''; // Clear existing content
                  for (let i = 0; i < steps.length; i++) {
                      const circle = document.createElement('div');
                      circle.classList.add('circle');
                      indicators.appendChild(circle);
                  }
  
                  // Update rec elements in rec-ctn
                  const recCtn = document.querySelector('.rec-ctn');
                  recCtn.innerHTML = ''; // Clear existing content
                  for (let i = 1; i <= steps.length; i++) { // Change 3 to the desired number of rec elements
                      const recElement = document.createElement('div');
                      recElement.classList.add('rec', 'w-full', 'h-full', 'rounded-3xl', 'flex-shrink-0', 'overflow-hidden');
                      recElement.innerHTML = `<img src="./imgs/${structure.toLowerCase()} (${i}).jpg" class="item-img object-cover w-full h-full" alt="">`;
                      recCtn.appendChild(recElement);
                  }
              } else {
                  console.error(`No steps found for ${operation} on ${structure}`);
              }
          } else {
              console.error('Structure or operation parameters missing in URL');
          }
  
          const recCtn = document.querySelector('.rec-ctn');
          const recs = document.querySelectorAll('.rec');
          const stepsSlider = document.querySelector('.steps-slider');
          const steps = document.querySelectorAll('.f-step');
          const indicators = document.querySelectorAll('.indicator .circle');
  
          let currentRecIndex = 0;
          let currentStepIndex = 0;
          let startX = 0;
          let endX = 0;
          let isDragging = false;
  
          function updateIndicators(index) {
              indicators.forEach((circle, i) => {
                  circle.classList.toggle('c-active', i === index);
              });
          }
  
          function showRec(index) {
              recs.forEach((rec, i) => {
                  if (i === index) {
                      rec.classList.add('active');
                      rec.style.transform = 'translateX(0)';
                  } else if (i < index) {
                      rec.classList.remove('active');
                      rec.style.transform = 'translateX(-100%)';
                  } else {
                      rec.classList.remove('active');
                      rec.style.transform = 'translateX(100%)';
                  }
              });
              updateIndicators(index);
          }
  
          function showStep(index) {
              steps.forEach((step, i) => {
                  if (i === index) {
                      step.classList.add('active');
                      step.style.transform = 'translateX(0)';
                  } else if (i < index) {
                      step.classList.remove('active');
                      step.style.transform = 'translateX(-100%)';
                  } else {
                      step.classList.remove('active');
                      step.style.transform = 'translateX(100%)';
                  }
              });
          }
  
          recCtn.addEventListener('touchstart', (e) => {
              startX = e.touches[0].clientX;
              isDragging = true;
          });
  
          recCtn.addEventListener('touchmove', (e) => {
              if (isDragging) {
                  endX = e.touches[0].clientX;
              }
          });
  
          recCtn.addEventListener('touchend', () => {
              if (isDragging) {
                  isDragging = false;
                  if (startX > endX + 50) {
                      // Swipe left
                      currentRecIndex = (currentRecIndex + 1) % recs.length;
                      currentStepIndex = (currentStepIndex + 1) % steps.length;
                  } else if (startX < endX - 50) {
                      // Swipe right
                      currentRecIndex = (currentRecIndex - 1 + recs.length) % recs.length;
                      currentStepIndex = (currentStepIndex - 1 + steps.length) % steps.length;
                  }
                  showRec(currentRecIndex);
                  showStep(currentStepIndex);
              }
          });
  
          // Initialize the first rec and step to be visible
          showRec(currentRecIndex);
          showStep(currentStepIndex);
      });