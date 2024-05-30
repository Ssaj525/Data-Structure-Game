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
const ImgArr = [
    {
        id: 1,
        imgurl: "./assets/steps-img/arr-c.png",
        title: "Array",
        steps: "35-40",
        bgColor: "bg-card-bg-5",
    },
    {
        id: 2,
        imgurl: "./assets/steps-img/stack-c.png",
        title: "Stack",
        steps: "15-19",
        bgColor: "bg-card-bg-1",
    },
    {
        id: 3,
        imgurl: "./assets/steps-img/queue-c.png",
        title: "Queue",
        steps: "15-20",
        bgColor: "bg-card-bg-4",
    },
    {
        id: 4,
        imgurl: "./assets/steps-img/ll-c.png",
        title: "Linked List",
        steps: "5-12",
        bgColor: "bg-card-bg-3",
    },
    {
        id: 5,
        imgurl: "./assets/steps-img/graph-c.png",
        title: "Graph",
        steps: "10-15",
        bgColor: "bg-card-bg-2",
    },
    {
        id: 6,
        imgurl: "./assets/steps-img/trees-c.png",
        title: "Tree",
        steps: "10-15",
        dec: "It is a non linear data...",
        bgColor: "bg-card-bg-8",
    },
];
var recentVisted;
const Setting = document.querySelector(".setting");
const settBtn = document.querySelector(".btn-setting");
const recentCtn = document.querySelector(".recent");
const closeBtn = document.querySelector(".close");
const cardSwiper = document.querySelector(".swiper-wrapper");
const cards = document.querySelector(".swiper-slide");
const optionCtn = document.querySelector(".opt-ctn");
const stepSlider = document.querySelector(".steps-slider");
const recCtn = document.querySelector(".rec-ctn");
const backBtn = document.querySelector(".back");
if (closeBtn || settBtn) {
    settBtn.addEventListener("click", () => {
        Setting.classList.toggle("hidden");
    });
    closeBtn.addEventListener("click", () => {
        Setting.classList.toggle("hidden");
    });
}
if (backBtn) {
    backBtn.addEventListener("click", () => {
        window.history.back();
    });
}

function Home() {
    // Check if recentCtn is defined
    if (recentCtn) {
        if (ImgArr.length > 0) {
            const mostRecentItem = ImgArr[ImgArr.length - 1]; // Get the most recent item from ImgArr
            const recElement = document.createElement("div");
            recElement.classList.add(
                "rec-ctn",
                "w-[93%]",
                "h-[76%]",
                "ml-2",
                "bg-card-bg-6",
                "flex",
                "rounded-2xl",
                "justify-center",
                "items-center",
                "px-2",
                "overflow-hidden"
            );

            recElement.innerHTML = `
            <div class="left w-[85%] h-full">
                <div class="item h-[76%] w-full flex gap-2 py-2">
                    <div class="img w-[100px] h-full rounded-lg overflow-hidden">
                        <img class="object-cover h-full w-full" src="${mostRecentItem.imgurl}" alt="">
                    </div>
                    <div class="info leading-4">
                        <h2 class="text-xl font-semibold">${mostRecentItem.title}</h2>
                        <h3>${mostRecentItem.dec}</h3>
                    </div>
                </div>
                <div class="steps flex items-center gap-2 mb-2">
                    <div class="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center">
                    <img src="./assets/icons/steps.svg" class="w-[90%] h-[90%] object-cover" alt="">
                    </div>
                    <h2 class="font-semibold text-lg">${mostRecentItem.steps} Steps</h2>
                </div>
            </div>
            <div class="right h-full w-[15%] flex items-center justify-center">
                <div class="btn w-full h-[90%] bg-black flex items-center justify-center rounded-xl">
                    <h2 class="text-white text-xl rotate-90 font-semibold"> <a href="options.html?title=${encodeURIComponent(
                        mostRecentItem.title
                    )}">Steps</a></h2>
                </div>
            </div>
        `;
            recentCtn.appendChild(recElement);
        } else {
            recentCtn.innerHTML = "<p>No data structures visited recently</p>";
        }
    }
    // Check if cardSwiper is defined
    if (cardSwiper) {
        // Fetch the data from ImgArr
        ImgArr.forEach((item) => {
            // Create elements dynamically and set their attributes
            const swiperSlide = document.createElement("div");
            swiperSlide.classList.add(
                "swiper-slide",
                "w-full",
                "h-[95%]",
                "rounded-2xl",
                "flex",
                "items-center",
                "px-2",
                "justify-center",
                "flex-col",
                item.bgColor
            ); // Add bgColor class from ImgArr item

            swiperSlide.innerHTML = `
            <div class="ctn w-full h-full mt-3 ml-2">
                <div class="img w-[95%] h-[60%] overflow-hidden rounded-xl">
                    <img class="w-full h-full object-cover" src="${item.imgurl
                }" alt="">
                </div>
                <div class="info w-[85%] h-[15%] ml-2 flex items-center justify-center flex-col">
                    <h2 class="text-2xl font-semibold">${item.title}</h2>
                </div>
                <div class="v-btn w-[85%] h-[12%] ml-2  bg-black rounded-xl flex items-center justify-center">
                    <a href="options.html?title=${encodeURIComponent(
                    item.title
                )}" class="text-white font-semibold text-xl mb-1 view-btn">View</a>
                </div>
            </div>
        `;

            // Append the dynamically created element to the cardSwiper container
            cardSwiper.appendChild(swiperSlide);
        });
    }
}
Home();

// Function to create operation buttons dynamically
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get("title");
    function createOperationButtons(structure) {
        const operations = Object.keys(data[structure]);

        // // Clear existing buttons
        // optionCtn.innerHTML = '';

        // Create buttons for each operation
        operations.forEach((operation) => {
            const btn = document.createElement("div");
            btn.classList.add(
                "btn",
                "w-[82%]",
                "h-[10%]",
                "bg-b-pri",
                "rounded-xl",
                "text-center",
                "pt-2",
                "capitalize"
            );
            btn.innerHTML = `<a href="operation.html?structure=${structure}&operation=${operation}" class="font-semibold text-2xl mb-1 text-white">${operation}</a>`;
            optionCtn.appendChild(btn);
        });
    }
    if(optionCtn)
    if (title) {
        createOperationButtons(title);
    } else {
        console.error("Title parameter not found in URL");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    // Add event listener for operation buttons
    if (optionCtn) {
        optionCtn.addEventListener("click", function (event) {
            if (event.target.tagName === "A") {
                const structure = event.target.getAttribute("data-structure");
                const operation = event.target.textContent.trim();
                // Here, you can perform actions based on the selected operation
                console.log(`Selected operation: ${operation} for ${structure}`);
            }
        });
    }
});
