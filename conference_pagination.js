const references = [
    "<b>[1]</b> R. Madhusudhan and R. C. Mittal. &ldquo;Security Weaknesses and Improvement of Dynamic ID based Remote User Authentication Protocol&rdquo;. <i>In IEEE Proceedings of International Conference on Computer Applications and Network Security (ICCANS-2011). 2011: Maldives. May 27-29 p. 231-235</i>.",
                "<b>[2]</b> R. Madhusudhan and R. C. Mittal. &ldquo;Security Weaknesses and Improvement of Dynamic ID based Remote User Authentication Protocol&rdquo;. <i>In Proceedings of International Conference on Advances in Modeling, Optimization and Computing (AMOC-2011). Roorkee. December 5-7, 2011, p. 1641-1650</i>.",
                "<b>[3]</b> R. Madhusudhan and R. C. Mittal. &ldquo;Security Weaknesses and Improvement of Dynamic ID based Remote User Authentication Protocol&rdquo;. <i>In Proceedings of International Conference on Frontiers of Computer Science (ICFoCS 2011), IISc, Bangalore, August 7-9, 2011</i>.",
                "<b>[4]</b> R. Madhusudhan and R. C. Mittal. &ldquo;An Efficient Fingerprint-Based Remote User Authentication Protocol Using Mobile Devices&rdquo;. <i>In Proceedings of the International Conference on Soft Computing for Problem Solving (SocProS 2011) December 20-22, 2011. 2011, Springer Berlin / Heidelberg. p. 569-578</i>. [<a href='https://link.springer.com/chapter/10.1007/978-81-322-0491-6_52' target='_blank'>URL</a>]",
                "<b>[5]</b> R. Madhusudhan and Rohith Kumar S. &ldquo;Cryptanalysis of a Remote User Authentication Protocol Using Smart Card&rdquo;. <i>In IEEE Proceedings of 2014 IEEE 8th International Symposium on Service Oriented System Engineering(SOSE-2014), 2014, Oxford, U.K, April 7-10, p.474-477</i>. [<a href='https://ieeexplore.ieee.org/document/6830951' target='_blank'>URL</a>]",
                "<b>[6]</b> R. Madhusudhan and A. Praveen. &ldquo;Weaknesses of a Dynamic ID Based Remote User Authentication Protocol for Multi-Server Environment&rdquo;. <i>In Proceedings of Conference on Information Security (CIS 2014), Suzhou, China, March 10-12</i>.",
                "<b>[7]</b> R. Madhusudhan and Annapurna Valiveti. &ldquo;Cryptanalysis of Remote User Authentication Scheme with key agreement&rdquo;. <i>2015 International Conference on Computer, Communications, and Control Technology (I4CT), Kuching, Sarawak, Malaysia, 21 Apr - 23 Apr 2015</i>. [<a href='https://ieeexplore.ieee.org/document/7219623' target='_blank'>URL</a>]",
                "<b>[8]</b> R. Madhusudhan and Manjunath Hegde. &ldquo;Cryptanalysis and Improvement of Remote User Authentication Scheme Using Smart Card&rdquo;. <i>2016 International Conference on Computer and Communication Engineering (ICCCE), pp. 84-89, IEEE, 2016</i>. [<a href='https://ieeexplore.ieee.org/document/7808288' target='_blank'>URL</a>]",
                "<b>[9]</b> R.Madhusudhan and Chaitanya S. Nayak. &ldquo;An Assessment of Website User Authentication Mechanisms&rdquo;. <i>Proceedings of the International Conference On Computing And Information Sciences, September 14-15, 2016, Dubai &ndash; United Arab Emirates</i>.",
                "<b>[10]</b> R. Madhusudhan and Shashidhara. &ldquo;An Efficient and Secure Authentication Scheme With User Anonymity for Roaming Service in Global Mobile Networks&rdquo;. <i>In Proceedings of the 6th International Conference on Communication and Network Security, Nov 26, 2016. pp. 119-126. ACM</i>. [<a href='https://www.researchgate.net/publication/312516794_An_Efficient_and_Secure_Authentication_Scheme_With_User_Anonymity_for_Roaming_Service_in_Global_Mobile_Networks' target='_blank'>URL</a>]",
                "<b>[11]</b> R. Madhusudhan and K. S. Suvidha. &ldquo;An Efficient and Secure User Authentication Scheme with Anonymity in Global Mobility Networks&rdquo;. <i>In Proceedings of the 31st International Conference on Advanced Information Networking and Applications Workshops (WAINA), 2017, pp. 19-24, IEEE</i>. [<a href='https://www.researchgate.net/publication/317071148_An_Efficient_and_Secure_User_Authentication_Scheme_with_Anonymity_in_Global_Mobility_Networks' target='_blank'>URL</a>]",
                "<b>[12]</b> R. Madhusudhan and K. S. Suvidha. &ldquo;An enhanced secure authentication scheme with user anonymity in mobile cloud computing&rdquo;. <i> In Proceedings of the PKIA 2017, Bangalore: 17 &ndash; 22</i>. [<a href='https://ieeexplore.ieee.org/abstract/document/8278955' target='_blank'>URL</a>]",
                "<b>[13]</b> R. Madhusudhan and Shashidhara. &ldquo;Mitigation of Cross-Site Scripting Attacks in Mobile Cloud Environments&rdquo;. <i>This paper has been accepted for presentation and publication at Sixth International Symposium on Security in Computing and Communications (SSCC-18) in Bangalore during September 19 &ndash; 22, 2018.(Springer)</i>. [<a href='https://www.springerprofessional.de/en/mitigation-of-cross-site-scripting-attacks-in-mobile-cloud-envir/16954958' target='_blank'>URL</a>]",
                "<b>[14]</b> R. Madhusudhan and Chaitanya S. Nayak. &ldquo;An Improved User Authentication Scheme for Telecare Medical Information Systems&rdquo;. <i>In Proceedings of the IEEE/ACM 3rd International Conference on Connected Health: Applications, Systems and Engineering Technologies: CHASE-MedSPT2018, Washington, D.C. during September 26 &ndash; 28, 2018</i>. [<a href='https://ieeexplore.ieee.org/document/8648687' target='_blank'>URL</a>]",
                "<b>[15]</b> R. Madhusudhan and Shashidhar. &ldquo; Cross-Channel Scripting (XCS) Attacks in Web Applications: Detection and Mitigation Approaches&rdquo;. <i>This paper has been accepted for presentation and publication at Second Cyber Security in Networking Conference (CSNet &apos;18) in Paris, France during October 24 &ndash; 26, 2018. (IEEE)</i>. [<a href='https://www.researchgate.net/publication/330257306_Cross_Channel_Scripting_XCS_Attacks_in_Web_Applications_Detection_and_Mitigation_Approaches' target='_blank'>URL</a>]",
                "<b>[16]</b> R. Madhusudhan, Manjunath Hegde. &ldquo;Smart Card Based Remote User Authentication Scheme for Cloud Computing&rdquo;. <i> UEMCON 2019: 905 &ndash; 910</i>. [<a href='https://ieeexplore.ieee.org/abstract/document/8992995' target='_blank'>URL</a>]",
                "<b>[17]</b> R. Madhusudhan, M. Ahsan. &ldquo;Prevention of SQL Injection Attacks Using Cryptography and Pattern Matching&rdquo;. <i>Lecture Notes in Networks and Systems, 450 LNNS, pp. 624 &ndash; 634, 2022</i>. [<a href='https://www.researchgate.net/publication/359633778_Prevention_of_SQL_Injection_Attacks_Using_Cryptography_and_Pattern_Matching' target='_blank'>URL</a>]",
                "<b>[18]</b>  R. Madhusudhan, S.V. Surashe. &ldquo;Privacy and Security Comparison of Web Browsers: A Review&rdquo;. <i>Lecture Notes in Networks and Systems, 451 LNNS, pp. 459 &ndash; 470, 2022</i>. [<a href='https://www.researchgate.net/publication/359624123_Privacy_and_Security_Comparison_of_Web_Browsers_A_Review' target='_blank'>URL</a>]",
                "<b>[19]</b> R. Madhusudhan, Vishnu K. K. &ldquo;A Framework for Blockchain-Based Scalable E-Voting System Using Sharding and Time-Slot Algorithm&rdquo;. <i>AINA (6) 2024: 432 &ndash; 443</i>. [<a href='https://link.springer.com/chapter/10.1007/978-3-031-57942-4_42' target='_blank'>URL</a>]",
                "<b>[20]</b> R. Madhusudhan, Shubham Kumar Thakur, P. Pravisha. &ldquo;Enhancing Intrusion Detection System Using Machine Learning and Deep Learning&rdquo;. <i> AINA (3) 2024: 326 &ndash; 337</i>. [<a href='https://link.springer.com/chapter/10.1007/978-3-031-57870-0_29' target='_blank'>URL</a>]",
                "<b>[21]</b> R. Madhusudhan, P. Pravisha. &ldquo; Blockchain Based Artificial Intelligence of Things(AIoT) for Wildlife Monitoring&rdquo;. <i>AINA (5) 2024: 25 &ndash; 36</i>. [<a href='https://link.springer.com/chapter/10.1007/978-3-031-57931-8_3' target='_blank'>URL</a>]"
];
const itemsPerPage = 8;
let currentPage = 1;

function showPage(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    document.getElementById("reference-list").innerHTML = references.slice(start, end).join("<br><br>");
    currentPage = page;
    updatePagination();
}

function updatePagination() {
    const totalPages = Math.ceil(references.length / itemsPerPage);
    let paginationHTML = `<span onclick="changePage(${currentPage - 1})" 
        style="cursor:pointer; ${currentPage === 1 ? 'color:gray;' : ''}">Previous</span> &nbsp;`;

    for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `<span onclick="changePage(${i})" 
            class="${currentPage === i ? 'active' : ''}"> ${i} </span> &nbsp;`;
    }

    paginationHTML += `<span onclick="changePage(${currentPage + 1})" 
        style="cursor:pointer; ${currentPage === totalPages ? 'color:gray;' : ''}">Next</span>`;

    document.getElementById("pagination").innerHTML = paginationHTML;
}


function changePage(page) {
    const totalPages = Math.ceil(references.length / itemsPerPage);
    if (page < 1 || page > totalPages) return;
    showPage(page);
}

window.onload = () => showPage(1);
