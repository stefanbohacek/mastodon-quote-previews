import ready from "./modules/ready.js";

ready(async () => {
  document.head.insertAdjacentHTML(
    "beforeend",
    `<style>
      .status-card__image:has(.fa) {
        display: none;
      }
      .status-card__description {
        white-space: normal;
      }
    </style>`
  );
});
