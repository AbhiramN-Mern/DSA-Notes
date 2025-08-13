function removeMiddle(stack) {
  const k = Math.floor(stack.length / 2);

  function deleteMid(stack, current) {
    if (stack.length === 0) return;

    const top = stack.pop();

    if (current === k) {
      // Skip this one — it's the middle
      return;
    }

    deleteMid(stack, current + 1);
    stack.push(top);
  }

  deleteMid(stack, 0);
}
