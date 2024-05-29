// fetch('/steps.json').then(response => response.json()).then(data => console.log(data.Array));
// const ImgArr = [
//     {
//         id: 1,
//         imgurl: "./imgs/lady (1).jpg"
//     }
// ]
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

// settBtn.addEventListener("click",()=>{
//     Setting.classList.toggle("hidden");
// })
// closeBtn.addEventListener("click",()=>{
//     Setting.classList.toggle("hidden");
// })

// backBtn.addEventListener("click",()=>{
//     window.history.back();
// })


function Home(){
const ImgArr = [
    {
        id: 1,
        imgurl: "./imgs/lady (1).jpg",
        title: "Array",
        steps: "14-18",
        bgColor: "bg-red-500"
    },
    {
        id: 2,
        imgurl: "./imgs/lady (177).jpg",
        title: "Stack",
        steps: "10-15",
        bgColor: "bg-blue-500"
    },
    {
        id: 3,
        imgurl: "./imgs/lady (169).jpg",
        title: "Queue",
        steps: "8-12",
        bgColor: "bg-green-500"
    },
    {
        id: 4,
        imgurl: "./imgs/lady (248).jpg",
        title: "Linked List",
        steps: "20-25",
        bgColor: "bg-yellow-500"
    },
    {
        id: 5,
        imgurl: "./imgs/lady (221).jpg",
        title: "Graph",
        steps: "16-20",
        bgColor: "bg-purple-500"
    }
];


// Check if recentCtn is defined
if (recentCtn) {
    if (ImgArr.length > 0) {
        const mostRecentItem = ImgArr[ImgArr.length - 1]; // Get the most recent item from ImgArr
        const recElement = document.createElement('div');
        recElement.classList.add('rec-ctn', 'w-[93%]', 'h-[76%]', 'ml-2', 'bg-blue-200', 'flex', 'rounded-2xl', 'justify-center', 'items-center', 'px-2', 'overflow-hidden');

        recElement.innerHTML = `
            <div class="left w-[85%] h-full">
                <div class="item h-[76%] w-full flex gap-2 py-2">
                    <div class="img w-[100px] h-full rounded-lg overflow-hidden">
                        <img class="object-cover h-full w-full" src="${mostRecentItem.imgurl}" alt="">
                    </div>
                    <div class="info leading-4">
                        <h2 class="text-xl font-semibold">${mostRecentItem.title}</h2>
                        <h3>Lorem ipsum dolor <br>sit amet consectetur</h3>
                    </div>
                </div>
                <div class="steps flex items-center gap-2 mb-2">
                    <div class="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center"></div>
                    <h2 class="font-semibold text-lg">${mostRecentItem.steps} Steps</h2>
                </div>
            </div>
            <div class="right h-full w-[15%] flex items-center justify-center">
                <div class="btn w-full h-[90%] bg-black flex items-center justify-center rounded-xl">
                    <h2 class="text-white text-xl rotate-90 font-semibold">Steps</h2>
                </div>
            </div>
        `;
        recentCtn.appendChild(recElement);
    } else {
        recentCtn.innerHTML = '<p>No data structures visited recently</p>';
    }
} else {
    console.error('recentCtn is not defined');
}

// Check if cardSwiper is defined
if (cardSwiper) {
    // Fetch the data from ImgArr
    ImgArr.forEach(item => {
        // Create elements dynamically and set their attributes
        const swiperSlide = document.createElement('div');
        swiperSlide.classList.add('swiper-slide', 'w-full', 'h-[95%]', 'rounded-2xl', 'flex', 'items-center', 'px-2', 'justify-center', 'flex-col', item.bgColor); // Add bgColor class from ImgArr item

        swiperSlide.innerHTML = `
            <div class="ctn w-full h-full mt-3 ml-2">
                <div class="img w-[95%] h-[60%] overflow-hidden rounded-xl">
                    <img class="w-full h-full object-cover" src="${item.imgurl}" alt="">
                </div>
                <div class="info w-[85%] h-[15%] ml-2 flex items-center justify-center flex-col">
                    <h2 class="text-2xl font-semibold">${item.title}</h2>
                </div>
                <div class="v-btn w-[85%] h-[12%] ml-2  bg-black rounded-xl flex items-center justify-center">
                    <a href="/options.html?title=${encodeURIComponent(item.title)}" class="text-white font-semibold text-xl mb-1 view-btn">View</a>
                </div>
            </div>
        `;

        // Append the dynamically created element to the cardSwiper container
        cardSwiper.appendChild(swiperSlide);
    });
} else {
    console.error('cardSwiper is not defined');
}
}
Home();

// Parse the JSON data
const data = {
    "Array": {
        "Insert at Beginning": [
          "1. Check if the array is full.",
          "2. If the array is full, resize the array.",
          "3. Shift all elements one position to the right.",
          "4. Assign the new element to the first index.",
          "5. Increment the array size."
        ],
        "Insert at End": [
          "1. Check if the array is full.",
          "2. If the array is full, resize the array.",
          "3. Assign the new element to the last index.",
          "4. Increment the array size."
        ],
        "Delete at Beginning": [
          "1. Check if the array is empty.",
          "2. If the array is empty, return an error.",
          "3. Retrieve the first element for possible use.",
          "4. Shift all elements one position to the left.",
          "5. Decrement the array size."
        ],
        "Delete at End": [
          "1. Check if the array is empty.",
          "2. If the array is empty, return an error.",
          "3. Retrieve the last element for possible use.",
          "4. Decrement the array size."
        ]
      },
      "Stack": {
        "Push": [
          "1. Create a new node with the element.",
          "2. Set the new node's next pointer to the current top.",
          "3. Update the top pointer to the new node.",
          "4. Increment the stack size."
        ],
        "Pop": [
          "1. Check if the stack is empty.",
          "2. If the stack is empty, return an error.",
          "3. Retrieve the top element.",
          "4. Update the top pointer to the next node.",
          "5. Decrement the stack size."
        ]
      },
      "Queue": {
        "Enqueue": [
          "1. Create a new node with the element.",
          "2. Check if the queue is empty.",
          "3. If the queue is empty, set the new node as both front and rear.",
          "4. If the queue is not empty, set the rear's next pointer to the new node.",
          "5. Update the rear pointer to the new node.",
          "6. Increment the queue size."
        ],
        "Dequeue": [
          "1. Check if the queue is empty.",
          "2. If the queue is empty, return an error.",
          "3. Retrieve the front element.",
          "4. Update the front pointer to the next node.",
          "5. If the front becomes null, update the rear to null.",
          "6. Decrement the queue size."
        ]
      },
      "Linked List": {
        "Insert at Beginning": [
          "1. Create a new node with the element.",
          "2. Set the new node's next pointer to the current head.",
          "3. Update the head pointer to the new node.",
          "4. If the list was empty, update the tail pointer to the new node.",
          "5. Increment the list size."
        ],
        "Insert at End": [
          "1. Create a new node with the element.",
          "2. Check if the list is empty.",
          "3. If the list is empty, set the new node as both head and tail.",
          "4. If the list is not empty, set the current tail's next pointer to the new node.",
          "5. Update the tail pointer to the new node.",
          "6. Increment the list size."
        ],
        "Delete at Beginning": [
          "1. Check if the list is empty.",
          "2. If the list is empty, return an error.",
          "3. Retrieve the current head node.",
          "4. Update the head pointer to the next node.",
          "5. If the head becomes null, update the tail to null.",
          "6. Free the old head node.",
          "7. Decrement the list size."
        ],
        "Delete at End": [
          "1. Check if the list is empty.",
          "2. If the list is empty, return an error.",
          "3. Traverse the list to find the node before the tail.",
          "4. Retrieve the current tail node.",
          "5. Update the tail pointer to the previous node.",
          "6. Set the new tail's next pointer to null.",
          "7. Free the old tail node.",
          "8. Decrement the list size."
        ]
      },
      "Graph": {
        "Add Vertex": [
          "1. Create a new vertex/node with the given value.",
          "2. Initialize the adjacency list for the new vertex.",
          "3. Add the new vertex to the graph's vertex list.",
          "4. Update the graph size."
        ],
        "Add Edge": [
          "1. Check if both vertices exist in the graph.",
          "2. If either vertex does not exist, return an error.",
          "3. Connect the two vertices by adding each other to their adjacency lists.",
          "4. If the graph is undirected, repeat the connection in the opposite direction.",
          "5. Update the edge count."
        ],
        "Delete Vertex": [
          "1. Check if the vertex exists in the graph.",
          "2. If the vertex does not exist, return an error.",
          "3. Remove the vertex from the graph's vertex list.",
          "4. Update the adjacency lists of all other vertices to remove references to the deleted vertex.",
          "5. Update the graph size."
        ],
        "Delete Edge": [
          "1. Check if the edge exists between the two vertices.",
          "2. If the edge does not exist, return an error.",
          "3. Disconnect the vertices by removing each other from their adjacency lists.",
          "4. If the graph is undirected, repeat the disconnection in the opposite direction.",
          "5. Update the edge count."
        ]
      },
      "Tree": {
        "Insert Node": [
          "1. Create a new node with the element.",
          "2. Start at the root and compare the element with the current node's value.",
          "3. Traverse left if the element is less than the current node's value, or right if it is greater.",
          "4. Repeat step 3 until reaching a leaf node.",
          "5. Insert the new node as a left or right child, based on the comparison.",
          "6. Update the tree size."
        ],
        "Delete Node": [
          "1. Check if the node exists in the tree.",
          "2. If the node does not exist, return an error.",
          "3. Find the node to be deleted and its parent node.",
          "4. Determine the case: no children, one child, or two children.",
          "5. For no children, simply remove the node.",
          "6. For one child, connect the child to the parent of the node to be deleted.",
          "7. For two children, find the inorder successor (or predecessor) to replace the node.",
          "8. Recursively delete the inorder successor (or predecessor) node.",
          "9. Update the tree size."
        ],
        "Search Node": [
          "1. Start at the root.",
          "2. Compare the element with the current node's value.",
          "3. If the element is equal to the current node's value, return the node.",
          "4. Traverse left if the element is less, or right if it is greater.",
          "5. Repeat steps 2-4 until the element is found or reaching a leaf node."
        ],
        "Traverse": [
          "1. Choose a traversal method: inorder, preorder, postorder.",
          "2. For inorder traversal:",
          "  2.1 Recursively traverse the left subtree.",
          "  2.2 Visit the current node.",
          "  2.3 Recursively traverse the right subtree.",
          "3. For preorder traversal:",
          "  3.1 Visit the current node.",
          "  3.2 Recursively traverse the left subtree.",
          "  3.3 Recursively traverse the right subtree.",
          "4. For postorder traversal:",
          "  4.1 Recursively traverse the left subtree.",
          "  4.2 Recursively traverse the right subtree.",
          "  4.3 Visit the current node."
        ]
      }
};

// Function to create operation buttons dynamically
document.addEventListener('DOMContentLoaded', () => {
const urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get('title');

function createOperationButtons(structure) {
    const operations = Object.keys(data[structure]);

    // // Clear existing buttons
    // optionCtn.innerHTML = '';

    // Create buttons for each operation
    operations.forEach(operation => {
        const btn = document.createElement('div');
        btn.classList.add('btn', 'w-[82%]', 'h-[10%]', 'bg-green-400', 'rounded-xl','text-center', 'pt-2', 'capitalize');
        btn.innerHTML = `<a href="operation.html?structure=${structure}&operation=${operation}" class="font-semibold text-2xl mb-1">${operation}</a>`;
        optionCtn.appendChild(btn);
    });
}
if (title) {
    createOperationButtons(title);
} else {
    console.error('Title parameter not found in URL');
}
});

document.addEventListener('DOMContentLoaded', function() {
    // Add event listener for operation buttons
    if (optionCtn) {
        optionCtn.addEventListener('click', function(event) {
            if (event.target.tagName === 'A') {
                const structure = event.target.getAttribute('data-structure');
                const operation = event.target.textContent.trim();
                // Here, you can perform actions based on the selected operation
                console.log(`Selected operation: ${operation} for ${structure}`);
            }
        });
    } else {
        console.error('optionCtn element not found');
    }
});
