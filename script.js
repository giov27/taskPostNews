const commentInput = $('.commentBox');
const submitBtn = $('#kirim');
const comments = $('.comments');
const deleteBtn = $('#delete-item');
const editBtn = $('edit-item')
// var com = $('#com');
// const pharagraph = $('li.pharagraph');

//submit button with li
$(submitBtn).click(() => {
    const input = commentInput.val();
    const li = $('<li class="pharagraph"></li>')
    console.log(li)
    li.html(input)
    comments.append(li)
    console.log(comments);
    commentInput.val("")
})

//delete comment button
$(deleteBtn).click(() => {
    comments.empty();
})

// $(editBtn).click(() => {
//     comments.text('bo')
//     com.append(input)
//     commentInput.val("")
// })

