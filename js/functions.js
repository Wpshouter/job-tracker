function update_interview_container(count, minus = false) {
  const interview_countelement = document.getElementById("interview_count");
  const current = parseInt(interview_countelement.innerText);
  let newss = 0;
  if (minus != true) {
    newss = current + 1;
  } else {
    newss = current - 1;
  }
  interview_countelement.innerText = newss;
}
function update_ireject_container(count, minus = false) {
  const interview_countelement = document.getElementById("reject_count");
  const current = parseInt(interview_countelement.innerText);
  let newss = 0;
  if (minus != true) {
    newss = current + 1;
  } else {
    newss = current - 1;
  }
  interview_countelement.innerText = newss;
}
function update_second_counder(found){
  //console.log('sss');
   const countElementHeaer = document.getElementById("total_count_h");
    const countElementBody = document.getElementById("job-count");
    const current = parseInt(countElementHeaer.innerText);
    countElementBody.innerText = found+' of '+current;
}
function update_card_label(card, status) {
  const badgeElemt = card.querySelector(".badge");
  if (status === "INTERVIEW") {
    badgeElemt.innerText = status;
    badgeElemt.classList.add("custom_badge_primary");
    if (badgeElemt.classList.contains("custom_badge_rejected")) {
      badgeElemt.classList.remove("custom_badge_rejected");
      update_ireject_container(1, true);
    }
  } else if (status === "REJECTED") {
    badgeElemt.innerText = status;
    badgeElemt.classList.add("custom_badge_rejected");
    if (badgeElemt.classList.contains("custom_badge_primary")) {
      badgeElemt.classList.remove("custom_badge_primary");
      update_interview_container(1, true);
    }
  }
}
function delete_A_card(card) {
  //rejected
  if (card.classList.contains("rejected")) {
    update_ireject_container(1, true);
  } else if (card.classList.contains("interview")) {
    update_interview_container(1, true);
  } else {
  }
  card.remove();
  const countElementHeaer = document.getElementById("total_count_h");
  const countElementBody = document.getElementById("job-count");
  const current = parseInt(countElementHeaer.innerText);
  let newsc = current - 1;
  countElementHeaer.innerText = newsc;
  countElementBody.innerText = newsc;
}
