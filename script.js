const byteSize = (str) => {
  // write your code here
	 // Create a Blob object from the input string
  const blob = new Blob([str]);

  // Get the size of the Blob in bytes
  const sizeInBytes = blob.size;

  return sizeInBytes;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));

