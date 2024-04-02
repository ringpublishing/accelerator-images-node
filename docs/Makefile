MD_DOCS_DIR = markdown
RST_DOCS_DIR = rst

# Find all .md files in the source directory
MD_DOCUMENTS := $(shell find ./$(MD_DOCS_DIR) -type f -name "*.md")

# Create a list of .rst files by replacing the source directory with the destination directory
RST_DOCUMENTS := $(subst $(MD_DOCS_DIR),$(RST_DOCS_DIR),$(addsuffix .rst, $(basename $(MD_DOCUMENTS))))

rst: $(RST_DOCUMENTS) ## Convert all *.md documents to *.rst

$(RST_DOCS_DIR)/%.rst: $(MD_DOCS_DIR)/%.md
	@mkdir -p $(dir $@)
	pandoc $^ --from markdown --to rst --output $@ --verbose
