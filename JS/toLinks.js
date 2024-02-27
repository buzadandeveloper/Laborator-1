export function toLink(divId, link){
    document.getElementById(divId).addEventListener("click", () => {
        window.location.href = link;
    })
}