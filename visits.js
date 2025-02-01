document.addEventListener("DOMContentLoaded", function () {
    const tableData = [
        ["1", "Research Interaction with Professor Rajkumar Buyya", "University of Melbourne, Australia", "20/11/2008 - 10/12/2008"],
        ["2", "The 2011 International Conference on Computer Applications and Network Security (ICCANS 2011)", "MALE, Maldives", "27/05/2011 - 29/05/2011"],
        ["3", "Conference on Information Security (CIS 2014)", "Suzhou, China", "10/03/2014 - 12/03/2014"],
        ["4", "IEEE 8th International Symposium on Service Oriented System Engineering", "OXFORD University, UK", "07/04/2014 - 10/04/2014"],
        ["5", "International Conference on Computer and Applications (ICCA)", "Dubai, United Arab Emirates", "14/09/2016 - 15/09/2016"],
        ["6", "6th International Conference Computer and Communication Engineering 2016 (ICCCE 2016)", "Kuala Lumpur, Malaysia", "25/07/2016 - 27/07/2016"],
        ["7", "6th International Conference on Communication and Network Security (ICCNS 2016)", "Nanyang Technological University, Singapore", "26/11/2016 - 29/11/2016"],
        ["8", "2nd Cyber Security In Networking Conference in Paris (CSNet)", "Paris, France", "24/10/2018 - 26/10/2018"],
        ["9", "IEEE 10th Annual Ubiquitous Computing, Electronics & Mobile Communication Conference (UEMCON)", "Columbia University, New York, USA", "10/10/2019 - 12/10/2019"],
        ["10", "7th Cyber Security In Networking Conference in Paris (CSNet 2023)", "Montrel, Canada", "16/10/2023 - 18/10/2023"],
        ["11", "The 38th International Conference on Advanced Information Networking and Applications (AINA-2024)", "Kitakyushu International Conference Center, Kitakyushu, Japan", "17/04/2024 - 19/04/2024"]
    ];

    const rowsPerPage = 8;
    let currentPage = 1;
    const totalPages = Math.ceil(tableData.length / rowsPerPage);
    const tableBody = document.getElementById("table-body");
    const paginationControls = document.getElementById("pagination-controls");

    function displayTable(page) {
        tableBody.innerHTML = ""; // Clear table body
        let startIndex = (page - 1) * rowsPerPage;
        let endIndex = Math.min(startIndex + rowsPerPage, tableData.length);

        for (let i = startIndex; i < endIndex; i++) {
            let row = document.createElement("tr");
            tableData[i].forEach(cellData => {
                let cell = document.createElement("td");
                cell.textContent = cellData;
                row.appendChild(cell);
            });
            tableBody.appendChild(row);
        }
    }

    function createPaginationButtons() {
        paginationControls.innerHTML = "";

        let prevButton = document.createElement("span");
        prevButton.textContent = "Previous";
        prevButton.classList.add("pagination-btn");
        if (currentPage === 1) prevButton.classList.add("disabled");
        prevButton.addEventListener("click", () => changePage(currentPage - 1));
        paginationControls.appendChild(prevButton);

        for (let i = 1; i <= totalPages; i++) {
            let pageButton = document.createElement("span");
            pageButton.textContent = i;
            if (i === currentPage) pageButton.classList.add("active");
            pageButton.addEventListener("click", () => changePage(i));
            paginationControls.appendChild(pageButton);
        }

        let nextButton = document.createElement("span");
        nextButton.textContent = "Next";
        if (currentPage === totalPages) nextButton.classList.add("disabled");
        nextButton.addEventListener("click", () => changePage(currentPage + 1));
        paginationControls.appendChild(nextButton);
    }

    function changePage(newPage) {
        if (newPage < 1 || newPage > totalPages) return;
        currentPage = newPage;
        displayTable(currentPage);
        createPaginationButtons();
    }

    // Initial display
    displayTable(currentPage);
    createPaginationButtons();
});
