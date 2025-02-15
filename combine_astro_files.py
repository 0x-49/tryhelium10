import os

def find_astro_files(start_path):
    astro_files = []
    for root, dirs, files in os.walk(start_path):
        for file in files:
            if file.endswith('.astro'):
                astro_files.append(os.path.join(root, file))
    return astro_files

def combine_files(files, output_file):
    with open(output_file, 'w', encoding='utf-8') as outfile:
        for file_path in files:
            # Add a clear separator and file path
            outfile.write('\n' + '=' * 80 + '\n')
            outfile.write(f'FILE: {file_path}\n')
            outfile.write('=' * 80 + '\n\n')
            
            # Read and write the content of each file
            try:
                with open(file_path, 'r', encoding='utf-8') as infile:
                    content = infile.read()
                    outfile.write(content)
                    outfile.write('\n')  # Add a newline between files
            except Exception as e:
                outfile.write(f'Error reading file: {str(e)}\n')

def main():
    # Get the directory where the script is located
    current_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Define paths to search for .astro files
    src_dir = os.path.join(current_dir, 'src')
    
    # Define the output file path
    output_file = os.path.join(current_dir, 'CombinedAstroFiles.txt')
    
    # Find all .astro files
    astro_files = find_astro_files(src_dir)
    
    # Sort files for consistent output
    astro_files.sort()
    
    # Combine all files
    combine_files(astro_files, output_file)
    
    print(f'Combined {len(astro_files)} .astro files into {output_file}')
    print('Files processed:')
    for file in astro_files:
        print(f'- {file}')

if __name__ == '__main__':
    main()
