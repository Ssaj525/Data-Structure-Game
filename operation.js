const data = {
  Array: {
    "Insert at Beginning": {
      steps: [
        "Check if the array is full. Condition: (n-1 = n) or last index = n",
        "If the array is full, operation not possible.",
        "Shift all elements one position to the right.",
        "Shift all elements until we reach last index.",
        "Assign the new element to the first index.",
        "The Element is inserted at beginning.",
      ],
      images: [
        "./assets/steps-img/arr-org.png",
        "./assets/steps-img/Op-No.png",
        "./assets/steps-img/arr-begin-insert.png",
        "./assets/steps-img/arr-begin-insert-2.png",
        "./assets/steps-img/arr-b-insert.png",
        "./assets/steps-img/arr-b-insert.png",
      ],
    },
    "Insert at Middle": {
      steps: [
        "Check if the array is full.",
        "If the array is full, operation not possible.",
        "Shift all elements one position to the right.",
        "Shift all elements until we reach our desired element.",
        "Assign the new element to your desired location.",
        "The Element is inserted at your desired/middle.",
      ],
      images: [
        "./assets/steps-img/arr-org.png",
        "./assets/steps-img/Op-No.png",
        "./assets/steps-img/arr-m-insert-3.png",
        "./assets/steps-img/arr-m-insert-2.png",
        "./assets/steps-img/arr-m-insert.png",
        "./assets/steps-img/arr-m-insert.png",
      ],
    },
    "Insert at End": {
      steps: [
        "Check if the array is full.",
        "If the array is full, operation not possible.",
        "Assign the new element to the last index.",
        "The Element is inserted at End.",
      ],
      images: [
        "./assets/steps-img/arr-org.png",
        "./assets/steps-img/Op-No.png",
        "./assets/steps-img/arr-end-insert.png",
        "./assets/steps-img/arr-end-insert-2.png",
      ],
    },
    "Delete at Beginning": {
      steps: [
        "Check if the array is empty. Condition: last index = -1",
        "If the array is empty, return an error.",
        "Delete first Element.",
        "Shift all elements one position to the left.",
        "Display Element is Deleted",
      ],
      images: [
        "./assets/steps-img/arr-empty.png",
        "./assets/steps-img/Op-No.png",
        "./assets/steps-img/arr-b-delete.png",
        "./assets/steps-img/arr-b-delete-2.png",
        "./assets/steps-img/arr-b-delete-3.png",
      ],
    },
    "Delete at Middle": {
      steps: [
        "Check if the array is empty.",
        "If the array is empty, return an error.",
        "Delete desired Element.",
        "Shift all elements one position to the left.",
        "Display Element is Deleted",
      ],
      images: [
        "./assets/steps-img/arr-empty.png",
        "./assets/steps-img/Op-No.png",
        "./assets/steps-img/arr-m-delete.png",
        "./assets/steps-img/arr-m-delete-2.png",
        "./assets/steps-img/arr-m-delete-3.png",
      ],
    },
    "Delete at End": {
      steps: [
        "Check if the array is empty.",
        "If the array is empty, return an error.",
        "Decrement the last index value by one (i.e last index-- or last index = 1.)",
        "Display Element is Deleted",
      ],
      images: [
        "./assets/steps-img/arr-empty.png",
        "./assets/steps-img/Op-No.png",
        "./assets/steps-img/arr-end-delete.png",
        "./assets/steps-img/arr-end-delete-2.png",
      ],
    },
    "Search": {
      steps: [
        "Check if the array is empty.",
        "If the array is empty, return an error.",
        "Create a temp pointer and initialize it to the first element.",
        "Take a Key Element and Compare it with Temp if (temp == key).",
        "Then Display the Element or else increment the temp pointer.",
        "If temp reaches last index but not found the element then stop the search.",
      ],
      images: [
        "./assets/steps-img/arr-empty.png",
        "./assets/steps-img/Op-No.png", 
        "./assets/steps-img/arr-search-2.png",
        "./assets/steps-img/arr-search-2.png",
        "./assets/steps-img/arr-search-2.png",
        "./assets/steps-img/arr-search-2.png",
      ],
    },
    "Traverse": {
      steps: [
        "Check if the array is empty.",
        "If the array is empty, return an error.",
        "Create a temp pointer and initialize it to the first element.",
        "Then display the elements pointed by temp and increment until we reach last index.",
      ],
      images: [
        "./assets/steps-img/arr-empty.png",
        "./assets/steps-img/Op-No.png", 
        "./assets/steps-img/arr-display.png",
        "./assets/steps-img/arr-display.png",
      ],
    
    },
  },
  Stack: {
    Push: {
      steps: [
        "Check if the stack is full. Condition: (top = n-1).",
        "If the stack is full, operation not possible.",
        "Otherwise, Increment the top pointer value by 1.",
        "Insert the new element pointed by the top.",
        "Element Inserted Successfully.",
      ],
      images: [
        "./assets/steps-img/stack-org.png",
        "./assets/steps-img/Op-No.png",
        "./assets/steps-img/stack-push.png",
        "./assets/steps-img/stack-push-2.png",
        "./assets/steps-img/stack-push-3.png",
      ],
    },
    Pop: {
      steps: [
        "Check if the stack is empty. Condition: (top = -1).",
        "If the stack is empty, operation not possible.",
        "Otherwise, Decrement the top pointer value by 1.",
        "Element will be deleted automatically.",
      ],
      images: [
        "./assets/steps-img/stack-empty.png",
        "./assets/steps-img/Op-No.png",
        "./assets/steps-img/stack-pop.png",
        "./assets/steps-img/stack-pop-4.png",
      ],
    },
    Search: {
      steps: [
        "Check if the stack is empty. Condition: (top = -1).",
        "If the stack is empty, operation not possible.",
        "Otherwise, Create a temp pointer and initialize it with top.",
        "Then Compare temp value with key value if both are equal then goto step 6.",
        "Otherwise, Decrement the temp pointer until we reach end of the stack.",
        "Then Display the Value if found.",
      ],
      images: [
        "./assets/steps-img/stack-empty.png",
        "./assets/steps-img/Op-No.png",
        "./assets/steps-img/stack-search.png",
        "./assets/steps-img/stack-search.png",
        "./assets/steps-img/stack-search-2.png",
        "./assets/steps-img/stack-search-2.png",
      ],
    },
    Traverse: {
      steps: [
        "Check if the stack is empty. Condition: (top = -1).",
        "If the stack is empty, operation not possible.",
        "Otherwise, Create a temp pointer and initialize it with top.",
        "Then Compare display the value pointed by temp and decrement temp pointer by 1 repeat until we reach end of the stack.",
      ],
      images: [
        "./assets/steps-img/stack-empty.png",
        "./assets/steps-img/Op-No.png",
        "./assets/steps-img/stack-traverse.png",
        "./assets/steps-img/stack-tra.png",
      ],
    },
  },
  Queue: {
    Enqueue: {
      steps: [
        "Check if the queue is full. Condition: (rear = n-1).",
        "If the queue is full, operation not possible.",
        "Otherwise, Increment the rear pointer value by 1.",
        "Insert the new element pointed by the rear.",
        "Element Inserted Successfully.",
      ],
      images: [
        "./assets/steps-img/queue-org.png",
        "./assets/steps-img/Op-No.png",
        "./assets/steps-img/queue-en-2.png",
        "./assets/steps-img/queue-en-3.png",
        "./assets/steps-img/queue-en.png",
      ],
    },
    Dequeue: {
      steps: [
        "Check if the queue is empty. Condition: (rear&&front = -1).",
        "If the queue is empty, operation not possible.",
        "Otherwise, create two pointer front and rear.",
        "Then Increment the front pointer value by 1.",
        "Element will be deleted automatically.",
      ],
      images: [
        "./assets/steps-img/queue-org.png",
        "./assets/steps-img/Op-No.png",
        "./assets/steps-img/queue-de.png",
        "./assets/steps-img/queue-de-2.png",
        "./assets/steps-img/queue-de-3.png",
      ],
    },
    Search: {
      steps: [
        "Check if the queue is empty. Condition: (rear&&front = -1).",
        "If the queue is empty, operation not possible.",
        "Otherwise, create a temp pointer.",
        "Then compare its value with key if equal display the element.",
        "Otherwise, increment the temp pointer until it reaches the rear.",
        "After reaching the rear if element not found then display element not present in the queue.",
      ],
      images: [
        "./assets/steps-img/queue-org.png",
        "./assets/steps-img/Op-No.png",
        "./assets/steps-img/queue-search.png",
        "./assets/steps-img/queue-search.png",
        "./assets/steps-img/queue-search-2.png",
        "./assets/steps-img/queue-search-2.png",
      ],
    },
    Traverse: {
      steps: [
        "Check if the queue is empty. Condition: (rear&&front = -1).",
        "If the queue is empty, operation not possible.",
        "Otherwise, create a temp pointer.",
        "Then display the value pointed by temp and increment the temp pointer value until we reach the rear.",
      ],
      images: [
        "./assets/steps-img/queue-org.png",
        "./assets/steps-img/Op-No.png",
        "./assets/steps-img/queue-traverse.png",
        "./assets/steps-img/queue-tra-2.png",
      ],
    },
  },
  "Linked List": {
    "Insert Node": {
      steps: [
        "Check Whether the head is null or not.",
        "Otherwise, Create a new node with the element.",
        "If it is Null then set the head to new node.",
        "Otherwise, Set the new node's next pointer to the current head.",
        "Update the head pointer to the new node. then the node will be inserted.",
      ],
      images: [
        "./assets/steps-img/ll-empty.png",
        "./assets/steps-img/ll-org.png",
        "./assets/steps-img/ll-insert.png",
        "./assets/steps-img/ll-insert-2.png",
        "./assets/steps-img/ll-insert-2.png",
      ],
    },
    "Delete Node": {
      steps: [
        "Check Whether the head is null or not.",
        "If it is Null then operation not possible.",
        "If head is not empty Set the head to null then the node will be deleted.",
        "Otherwise, create a temp pointer and increment it until it reaches null.",
        "Then set newNode -> link = temp -> link and temp -> link = newNode.",
        "Then the node will be deleted.",
      ],
      images: [
        "./assets/steps-img/ll-empty.png",
        "./assets/steps-img/Op-No.png",
        "./assets/steps-img/ll-org.png",
        "./assets/steps-img/ll-delete.png",
        "./assets/steps-img/ll-delete-2.png",
        "./assets/steps-img/ll-delete-4.png",
      ],
    },
  },
  Graph: {
    "DFS": {
      steps: [
        "Define a Root and Check if it is Empty/Null.",
        "If it is Null, then create a empty stack.",
        "then select any vertex as starting vertex and push it into the stack.",
        "Visit any one of the adjacent vertex of the starting vertex, it should be not visited then visit it and push into the stack.",
        "Repeat the above step until we visit all the vertices.",
        "Then use back tracking and pop one by one all the vertices from the stack.",
        "Until all the vertices are popped out, then produce the final spanning tree.",
      ],
      images: [
        "./assets/steps-img/Graph.png",
        "./assets/steps-img/dfs-1.png",
        "./assets/steps-img/dfs-2.png",
        "./assets/steps-img/dfs-3.png",
        "./assets/steps-img/dfs-4.png",
        "./assets/steps-img/dfs-5.png",
        "./assets/steps-img/dfs-6.png",
      ],
    },
    "BFS": {
      steps: [
        "Define a Root and Check if it is Empty/Null.",
        "If it is Null, then create a empty queue.",
        "then select any vertex as starting vertex and Enqueue it into the queue.",
        "Visit any one of the adjacent vertex of the starting vertex, it should be not visited then visit it and push into the queue.",
        "Repeat the above step until we visit all the vertices.",
        "Then use back tracking and dequeue one by one all the vertices from the stack.",
        "Until all the vertices are dequeued out, then produce the final spanning tree.",
      ],
      images: [
        "./assets/steps-img/Graph.png",
        "./assets/steps-img/bfs-1.png",
        "./assets/steps-img/bfs-2.png",
        "./assets/steps-img/bfs-3.png",
        "./assets/steps-img/bfs-4.png",
        "./assets/steps-img/bfs-5.png",
        "./assets/steps-img/bfs-6.png",
      ],
    },
  },
  Tree: {  
    "Search Node": {
      steps: [
        "Start at the root.",
        "Compare the element with the current node's value.",
        "If the element is equal to the current node's value, return the node.",
        "Traverse left if the element is less, or right if it is greater.",
        "Repeat steps 2-4 until the element is found or reaching a leaf node.",
      ],
      images: [
        "./assets/steps-img/tree-empty.png",
        "./assets/steps-img/tree-bst.png",
        "./assets/steps-img/Op-No.png",
        "./assets/steps-img/tree-bst.png",
        "./assets/steps-img/tree-bst.png",
      ],
    },
    "Traverse": {
      steps: [
        "Choose a traversal method: inorder, preorder, postorder.",
        "For inorder traversal: Recursively traverse the left subtree.",
        "Visit the current node.",
        "Recursively traverse the right subtree.",
        "For preorder traversal: Visit the current node.",
        "Recursively traverse the left subtree.",
        "Recursively traverse the right subtree.",
        "For postorder traversal: Recursively traverse the left subtree.",
        "Recursively traverse the right subtree.",
        "Visit the current node.",
      ],
      images: [
        "./assets/steps-img/CC.png",
        "./assets/steps-img/tree-bst.png",
        "./assets/steps-img/tree-inorder.png",
        "./assets/steps-img/tree-inorder.png",
        "./assets/steps-img/tree-bst.png",
        "./assets/steps-img/tree-preorder.png",
        "./assets/steps-img/tree-preorder.png",
        "./assets/steps-img/tree-bst.png",
        "./assets/steps-img/tree-postorder.png",
        "./assets/steps-img/tree-postorder.png",
      ],
    },
  },
};

const backBtn = document.querySelector(".back");
backBtn.addEventListener("click", () => {
  window.history.back();
});
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const structure = urlParams.get("structure");
  const operation = urlParams.get("operation");

  // Update content based on structure and operation
  if (structure && operation) {
    // Update heading with structure and operation
    const heading = document.querySelector(".options h2");
    heading.textContent = `${operation} Operation on ${structure}`;

    // Get the steps for the specified structure and operation from the JSON data
    const steps = data[structure]?.[operation]?.steps;
    if (steps) {
      // Update f-step elements in steps div
      const stepsDiv = document.querySelector(".steps .steps-slider");
      stepsDiv.innerHTML = ""; // Clear existing content
      steps.forEach((step, index) => {
        const fStepElement = document.createElement("div");
        fStepElement.classList.add("f-step", "leading-5", "font-semibold");
        fStepElement.textContent = `${index + 1}: ${step}`;
        stepsDiv.appendChild(fStepElement);
      });

      const indicators = document.querySelector(".indicator");
      indicators.innerHTML = ""; // Clear existing content
      for (let i = 0; i < steps.length; i++) {
        const circle = document.createElement("div");
        circle.classList.add("circle");
        indicators.appendChild(circle);
      }

      // Update rec elements in rec-ctn
      const recCtn = document.querySelector(".rec-ctn");
      recCtn.innerHTML = ""; // Clear existing content
      for (let i = 1; i <= steps.length; i++) {
        // Change 3 to the desired number of rec elements
        const recElement = document.createElement("div");
        recElement.classList.add(
          "rec",
          "w-full",
          "h-full",
          "rounded-3xl",
          "flex-shrink-0",
          "overflow-hidden"
        );
        recElement.innerHTML = `<img src="${
          data[structure][operation].images[i - 1]
        }" class="item-img object-cover w-full h-full" alt="">`;
        recCtn.appendChild(recElement);
      }
    } else {
      console.error(`No steps found for ${operation} on ${structure}`);
    }
  } else {
    console.error("Structure or operation parameters missing in URL");
  }

  const recCtn = document.querySelector(".rec-ctn");
  const recs = document.querySelectorAll(".rec");
  const stepsSlider = document.querySelector(".steps-slider");
  const steps = document.querySelectorAll(".f-step");
  const indicators = document.querySelectorAll(".indicator .circle");

  let currentRecIndex = 0;
  let currentStepIndex = 0;
  let startX = 0;
  let endX = 0;
  let isDragging = false;

  function updateIndicators(index) {
    indicators.forEach((circle, i) => {
      circle.classList.toggle("c-active", i === index);
    });
  }

  function showRec(index) {
    recs.forEach((rec, i) => {
      if (i === index) {
        rec.classList.add("active");
        rec.style.transform = "translateX(0)";
      } else if (i < index) {
        rec.classList.remove("active");
        rec.style.transform = "translateX(-100%)";
      } else {
        rec.classList.remove("active");
        rec.style.transform = "translateX(100%)";
      }
    });
    updateIndicators(index);
  }

  function showStep(index) {
    steps.forEach((step, i) => {
      if (i === index) {
        step.classList.add("active");
        step.style.transform = "translateX(0)";
      } else if (i < index) {
        step.classList.remove("active");
        step.style.transform = "translateX(-100%)";
      } else {
        step.classList.remove("active");
        step.style.transform = "translateX(100%)";
      }
    });
  }

  recCtn.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
  });

  recCtn.addEventListener("touchmove", (e) => {
    if (isDragging) {
      endX = e.touches[0].clientX;
    }
  });

  recCtn.addEventListener("touchend", () => {
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
