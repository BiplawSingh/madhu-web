const references = [
            "<b>[1]</b> Madhusudhan, R, and RC, Mittal. &ldquo;Dynamic ID-based remote user password authentication schemes using smart cards: A review&rdquo;. <i>Journal of Network and Computer Applications 35, no.4 (2012): 1235 &ndash; 1248</i>. [<a href='https://www.sciencedirect.com/science/article/abs/pii/S1084804512000215' target='_blank'>URL</a>]",
            "<b>[2]</b> Madhusudhan, R, and Adireddi, Praveen. &ldquo;Weaknesses of a dynamic ID based remote user authentication protocol for multi-server environment&rdquo;. <i>Journal of Computer and Communications 2, no.04 (2014): 196</i>. [<a href='https://file.scirp.org/pdf/JCC_2014031816475007.pdf' target='_blank'>URL</a>]",
            "<b>[3]</b> Madhusudhan, R, and RC, Mittal. &ldquo;An enhanced biometrics-based remote user authentication scheme using mobile devices&rdquo;. <i>International Journal of Computational Intelligence Studies 1, no.4 (2012): 333 &ndash; 348</i>. [<a href='https://www.researchgate.net/publication/259620933_An_enhanced_biometrics-based_remote_user_authentication_scheme_using_mobile_devices' target='_blank'>URL</a>]",
            "<b>[4]</b> Madhusudhan, R, and Manjunath, Hegde. &ldquo;Security bound enhancement of remote user authentication using smart card&rdquo;. <i>Journal of information security and applications 36 (2017): 59 &ndash; 68</i>. [<a href='https://www.sciencedirect.com/science/article/abs/pii/S221421261730203X' target='_blank'>URL</a>]",
            "<b>[5]</b> Madhusudhan, R, and R, Shashidhara. &ldquo;A secure and lightweight authentication scheme for roaming service in global mobile networks&rdquo;. <i>Journal of information security and applications 38 (2018): 96 &ndash; 110</i>. [<a href='https://www.sciencedirect.com/science/article/abs/pii/S2214212617301977' target='_blank'>URL</a>]",
            "<b>[6]</b> Madhusudhan, R, Manjunath, Hegde, and Imran, Memon. &ldquo;A secure and enhanced elliptic curve cryptography-based dynamic authentication scheme using smart card&rdquo;. <i>International Journal of Communication Systems 31, no.11 (2018): e3701</i>. [<a href='https://www.researchgate.net/publication/325400212_A_secure_and_enhanced_elliptic_curve_cryptography-based_dynamic_authentication_scheme_using_smart_card_A_secure_and_enhanced_elliptic_curve_cryptography' target='_blank'>URL</a>]",
            "<b>[7]</b> Madhusudhan, R, and Chaitanya S, Nayak. &ldquo;A robust authentication scheme for telecare medical information systems&rdquo;. <i>Multimedia Tools and Applications 78, no.11 (2019): 15255 &ndash; 15273</i>. [<a href='https://www.researchgate.net/publication/329273411_A_robust_authentication_scheme_for_telecare_medical_information_systems' target='_blank'>URL</a>]",
            "<b>[8]</b> Madhusudhan, R, and Chaitanya S, Nayak. &ldquo;An Assessment of Website User Authentication Mechanisms&rdquo;. <i>International Journal of Computing & Information Sciences 14, no.3 (2018): 14</i>. [<a href='' target='_blank'>URL</a>]",
            "<b>[9]</b> Madhusudhan, R, and R, Shashidhara. &ldquo;Mobile user authentication protocol with privacy preserving for roaming service in GLOMONET&rdquo;. <i>Peer-to-Peer Networking and Applications 13, no.1 (2020): 82 &ndash; 103</i>. [<a href='https://www.researchgate.net/publication/330763831_Mobile_user_authentication_protocol_with_privacy_preserving_for_roaming_service_in_GLOMONET' target='_blank'>URL</a>]",
            "<b>[10]</b> Madhusudhan, R, and R, Shashidhara. &ldquo;A novel DNA based password authentication system for global roaming in resource-limited mobile environments&rdquo;. <i> Multimedia Tools and Applications 79, no.3 (2020): 2185 &ndash; 2212</i>. [<a href='https://link.springer.com/article/10.1007/s11042-019-08349-8' target='_blank'>URL</a>]",
            "<b>[11]</b> Madhusudhan, R, and R, Shashidhara. &ldquo;A secure anonymous authentication protocol for roaming service in resource-constrained mobility environments&rdquo;. <i>Arabian Journal for Science and Engineering 45, no.4 (2020): 2993 &ndash; 3014</i>. [<a href='https://www.researchgate.net/publication/337390194_A_Secure_Anonymous_Authentication_Protocol_for_Roaming_Service_in_Resource-Constrained_Mobility_Environments' target='_blank'>URL</a>]",
            "<b>[12]</b> Madhusudhan, R, and KS, Suvidha. &ldquo;A secure lightweight two-factor authentication scheme in global mobility networks&rdquo;. <i>International Journal of Space-Based and Situated Computing 9, no.2 (2019): 109 &ndash; 123</i>. [<a href='https://www.researchgate.net/publication/338100916_A_secure_lightweight_two-factor_authentication_scheme_in_global_mobility_networks' target='_blank'>URL</a>]",
            "<b>[13]</b> Madhusudhan, R, and Chaitanya S, Nayak. &ldquo;An improved user authentication scheme for electronic medical record systems&rdquo;. <i>Multimedia Tools and Applications 79, no.29(2020): 22007 &ndash; 22026</i>. [<a href='https://www.researchgate.net/publication/341410288_An_improved_user_authentication_scheme_for_electronic_medical_record_systems' target='_blank'>URL</a>]",
            "<b>[14]</b> Madhusudhan, R, and KS, Suvidha. &ldquo;Robust and secure authentication protocol protecting privacy for roaming mobile user in global mobility networks&rdquo;. <i>International Journal of Grid and Utility Computing 12, no.1 (2021): 94 &ndash; 111</i>. [<a href='https://www.researchgate.net/publication/348640117_Robust_and_secure_authentication_protocol_protecting_privacy_for_roaming_mobile_user_in_global_mobility_networks' target='_blank'>URL</a>]"
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
