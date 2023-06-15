function ABD() {
  return "South African, RCB";
}
function MSD() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Indian, CSK");
    }, 4000);
  });
}
function VK() {
  return "Indian, RCB";
}

async function AAP() {
  console.log(ABD());
  console.log(VK());
  console.log( await MSD());
}
AAP();
