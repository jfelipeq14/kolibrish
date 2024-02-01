const dialog = document.getElementById("dialog3");
      const showDialogButton = document.getElementById("show3");
      const hideDialogButton = document.getElementById("hide3");

      showDialogButton.addEventListener("click", () => {
        dialog.showModal();
      });

      hideDialogButton.addEventListener("click", () => {
        dialog.close();
      });